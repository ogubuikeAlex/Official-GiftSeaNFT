// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract NFTMarketTwo is ReentrancyGuard, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _itemIds;
    Counters.Counter private _itemsSold; //When a person sells back to the market place increment this number
    Counters.Counter private _buyIds; //When a person buys from the market place increment this number

    event NftBought(
        address indexed acquirer,
        uint256 indexed tokenId,
        uint256 timeGotten
    );

    event NftSold(
        address indexed seller,
        uint256 indexed tokenId,
        uint256 indexed timeSold
    );

    event NftGifted(
        address indexed from,
        address indexed to,
        uint256 indexed tokenId,
        uint256 timeGifted
    );

    event TryingToSellPrematureNFT(
        address indexed sender,
        uint256 indexed tokenId,
        uint256 indexed amount
    );

    event MarketItemCreated(
        uint256 itemId,
        address indexed nftContract,
        address indexed owner,
        uint256 indexed tokenId,
        uint256 price,
        bool sold
    );   

    constructor() {}

    struct Holder {
        uint256 itemId; //market item id to link to a specific market Item
        uint256 timeGotten;
        uint256 timeGivenOut;
        uint256 buyId;
        address payable owner;
        bool isActiveHolder;
    }

    struct MarketItem {
        uint256 itemId;
        uint256 tokenId;
        uint256 price;
        address nftContract;
        address owner;
        bool sold;
    }

    mapping(uint256 => MarketItem) private idToMarketItem;
    mapping(uint256 => Holder) private buyIdToHolder; //mapping of buyId to the holder/ person that actually bought the item.

    /* Places an item for sale on the marketplace */
    function createMarketItem(
        address nftContract,
        uint256 tokenId,
        uint256 price
    ) external onlyOwner nonReentrant {
        require(price > 0, "Price must be at least 1 wei");

        _itemIds.increment();
        // console.log(_itemIds.current());
        uint256 itemId = _itemIds.current();

        idToMarketItem[itemId] = MarketItem(
            itemId,
            tokenId,
            price,
            nftContract,
            payable(address(0)),
            false
        );

        IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);

        emit MarketItemCreated(
            itemId,
            nftContract,
            address(0),
            tokenId,
            price,
            false
        );
    }

    /* Returns all unsold market items */
    function fetchMarketItems() external view returns (MarketItem[] memory) {
        uint256 itemCount = _itemIds.current();
        uint256 unsoldItemCount = _itemIds.current() - _buyIds.current();
        uint256 currentIndex = 0;

        MarketItem[] memory items = new MarketItem[](unsoldItemCount);

        for (uint256 i = 0; i < itemCount; i++) {
            if (idToMarketItem[i + 1].owner == address(0)) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    /* Returns onlyl items that a user has purchased */
    function fetchMyNFTs(address loggedInUser)
        external
        view
        returns (MarketItem[] memory)
    {
        uint256 totalItemCount = _itemIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToMarketItem[i + 1].owner == loggedInUser) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToMarketItem[i + 1].owner == loggedInUser) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    function buyNft(address nftContract, uint64 itemId)
        external
        payable
        nonReentrant
    {
        //When a person buys an nft create a nw holder
        //change market owner
        uint256 price = idToMarketItem[itemId].price;
        uint256 tokenId = idToMarketItem[itemId].tokenId;
        require(
            msg.value == price,
            "Please submit the asking price in order to complete the purchase"
        );

        IERC721(nftContract).safeTransferFrom(
            address(this),
            msg.sender,
            tokenId
        );

        idToMarketItem[itemId].sold = true;
        idToMarketItem[itemId].owner = msg.sender;
        _buyIds.increment();
        uint256 buyId = _buyIds.current();

        buyIdToHolder[buyId] = Holder(
            itemId,
            block.timestamp,
            0,
            buyId,
            payable(msg.sender),
            true
        );

        emit NftBought(msg.sender, itemId, block.timestamp);
    }

    function giftNft(
        address nftContract,
        address to,
        uint256 itemId
    ) external nonReentrant {
        require(
            idToMarketItem[itemId].owner == msg.sender,
            "You do not have permission to Gift this NFT as you are not the owner"
        );
        uint256 totalBoughtItems = _buyIds.current();
        uint256 tokenId = idToMarketItem[itemId].tokenId;
        address holder = idToMarketItem[itemId].owner;

        IERC721(nftContract).safeTransferFrom(holder, to, tokenId);

        idToMarketItem[itemId].owner = to;

        for (uint256 i = 0; i < totalBoughtItems; i++) {
            if (
                buyIdToHolder[i + 1].itemId == itemId &&
                buyIdToHolder[i + 1].isActiveHolder
            ) {
                buyIdToHolder[i + 1].timeGotten = block.timestamp;
                buyIdToHolder[i + 1].timeGivenOut = block.timestamp;
                buyIdToHolder[i + 1].owner = payable(to);
            }
        }
        emit NftGifted(msg.sender, to, tokenId, block.timestamp);
    }

    function sellNft(uint256 itemId, address nftContract)
        external
        nonReentrant
    {
        //Selling will revert buy
        uint256 price = idToMarketItem[itemId].price;
        uint256 tokenId = idToMarketItem[itemId].tokenId;
        uint256 totalBoughtItems = _buyIds.current();
        uint256 datePurchased;

        require(
            idToMarketItem[itemId].owner == msg.sender,
            "You do not have permission to Gift this NFT as you are not the owner"
        );

        //get the current holder and deactivate him
        for (uint256 i = 0; i < totalBoughtItems; i++) {
            if (
                buyIdToHolder[i + 1].itemId == itemId &&
                buyIdToHolder[i + 1].isActiveHolder
            ) {
                datePurchased = buyIdToHolder[i + 1].timeGotten;
                buyIdToHolder[i + 1].timeGivenOut = block.timestamp;
                buyIdToHolder[i + 1].isActiveHolder = false;
                buyIdToHolder[i + 1].owner = payable(address(0));
            }
        }

        idToMarketItem[itemId].sold = false;
        idToMarketItem[itemId].owner = address(0);
        //Calculate Cashout amount and emit premature Nft if isPrematureNft
        uint256 cashoutAmount = _calculateCashoutAmount(
            price,
            datePurchased,
            tokenId
        );

        //transfer to contract
        IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);

        //send money to user
        payable(msg.sender).transfer(cashoutAmount);

        _itemsSold.increment();
        //emit event
        emit NftSold(msg.sender, tokenId, block.timestamp);
    }

    function _getHoldTimeAndMaturityStatus(uint256 datePurchased)
        private
        view
        returns (bool, uint256)
    {
        uint256 holdTime = block.timestamp - datePurchased;
        if (holdTime > 183 days) {
            return (true, holdTime);
        }
        return (false, holdTime);
    }

    function _calculateCashoutAmount(
        uint256 initialPrice,
        uint256 datePurchased,
        uint256 tokenId
    ) private returns (uint256) {
        uint256 amountPerday = initialPrice / 365 days;
        bool isUpToSixMonths;
        uint256 timeOfHold;

        (isUpToSixMonths, timeOfHold) = _getHoldTimeAndMaturityStatus(
            datePurchased
        );
        //convert timeOfHold to days
        uint256 daysHeld = timeOfHold / 1 days; //86400sec //convert to a round number
        if (isUpToSixMonths) {
            return amountPerday * daysHeld;
        } else {
            // uint cashoutAmount = (30 / 100) * initialPrice;
            uint256 cashoutAmount = amountPerday * daysHeld;
            emit TryingToSellPrematureNFT(msg.sender, tokenId, cashoutAmount);
            return cashoutAmount;
        }
    }
}
