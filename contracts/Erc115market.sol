// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

import "./erc115other.sol";
import "hardhat/console.sol";

contract NFTMarket1155 is ReentrancyGuard, ERC1155Holder, OtherTwo {
    using Counters for Counters.Counter;
    uint256 private _itemIds;
    Counters.Counter private _itemsSold; //When a person sells back to the market place increment this number
    Counters.Counter private _buyIds; //When a person buys from the market place increment this number

    constructor(address admin) {
        _admin = payable(admin);
    }

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
    mapping(uint256 => uint256) private tokenIdToInitialAmountMinted;

    /* Places an item for sale on the marketplace */
    function createMarketItem(
        address nftContract,
        uint256 tokenId,
        uint256 amount,
        uint256 price
    ) external isAdmin nonReentrant {
        require(price > 0, "Price must be at least 1 wei");

        uint256 count = _itemIds;

        for (uint256 i = 0; i < amount; i++) {
            count += 1;

            uint256 itemId = count;

            idToMarketItem[itemId] = MarketItem(
                itemId,
                tokenId,
                price,
                nftContract,
                payable(address(0)),
                false
            );

            _itemIds = count;

            emit MarketItemCreated(
                itemId,
                nftContract,
                address(0),
                tokenId,
                price,
                false
            );
        }
        tokenIdToInitialAmountMinted[tokenId] = amount;

        uint x = tokenIdToInitialAmountMinted[tokenId];
console.log("....");
console.log(x);
        IERC1155(nftContract).safeTransferFrom(
            msg.sender,
            address(this),
            tokenId,
            amount,
            ""
        );
    }

    function GetTotalSupply(uint256 tokenId) external view returns (uint256) {
        return tokenIdToInitialAmountMinted[tokenId];
    }

    // function GetCurrentMarketcount() external view isAdmin returns (uint256) {
    //     return _itemIds;
    // }

    /* Returns all unsold market items */
    function fetchMarketItems() public view returns (MarketItem[] memory) {
        uint256 itemCount = _itemIds;
        uint256 unsoldItemCount = _itemIds - _itemsSold.current();
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
        uint256 totalItemCount = _itemIds;
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

        IERC1155(nftContract).safeTransferFrom(
            address(this),
            msg.sender,
            tokenId,
            1,
            ""
        );

        idToMarketItem[itemId].sold = true;
        idToMarketItem[itemId].owner = payable(msg.sender);
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
        Holder memory x = buyIdToHolder[buyId];

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

        IERC1155(nftContract).safeTransferFrom(holder, to, tokenId, 1, "");

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

    function sellNft(
        uint256 itemId,
        address nftContract,
        uint256 price
    ) external nonReentrant {
        uint256 tokenId = idToMarketItem[itemId].tokenId;
        uint256 totalBoughtItems = _buyIds.current();

        require(
            idToMarketItem[itemId].owner == msg.sender,
            "You do not have permission to Gift this NFT as you are not the owner"
        );
        IERC1155(nftContract).safeTransferFrom(
            msg.sender,
            address(this),
            tokenId,
            1,
            ""
        );

        //get the current holder and deactivate him
        for (uint256 i = 0; i < totalBoughtItems; i++) {
            if (
                buyIdToHolder[i].itemId == itemId &&
                buyIdToHolder[i].isActiveHolder
            ) {
                //datePurchased = buyIdToHolder[i + 1].timeGotten;
                buyIdToHolder[i].timeGivenOut = block.timestamp;
                buyIdToHolder[i].isActiveHolder = false;
                buyIdToHolder[i].owner = payable(address(0));
            }
        }

        idToMarketItem[itemId].sold = false;
        idToMarketItem[itemId].owner = address(0);
        _buyIds.decrement();
        //send money to user
        payable(msg.sender).transfer(price);

        //emit event
        emit NftSold(msg.sender, tokenId, block.timestamp);
    }

    function GetTimeBought(uint256 itemId) external view returns (uint256) {
        uint256 totalBoughtItems = _buyIds.current();

        for (uint256 i = 0; i < totalBoughtItems; i++) {
            if (
                buyIdToHolder[i + 1].itemId == itemId &&
                buyIdToHolder[i + 1].isActiveHolder
            ) {
                return buyIdToHolder[i + 1].timeGotten;
            }
        }
    }

    function getAllHolders() external view isAdmin returns (Holder[] memory) {
        // get current value of buyIds.
        uint256 holderCount = _buyIds.current();
        uint256 currentIndex = 0;
        // declare empty array with length ofv buyid.current
        Holder[] memory items = new Holder[](holderCount);

        // loop throught the empty array
        for (uint256 i = 0; i > holderCount; i++) {
            items[currentIndex] = (buyIdToHolder[i + 1]);
            currentIndex += 1;
        }

        return items;
    }
}
