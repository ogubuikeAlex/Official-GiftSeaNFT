// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract NFTMarket is ReentrancyGuard, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _itemIds;
    Counters.Counter private _itemsSold; //When a person sells back to the market place increment this number
    Counters.Counter private _buyIds; //When a person buys from the market place increment this number
    Counters.Counter private _giftIds; //When a person gifts

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
        uint timeGifted
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

    event MintSucces(address sender);
    
    constructor() {}

    struct Holder {
        uint itemId; //market item id to link to a specific market Item        
        uint timeGotten;
        uint timeGivenOut;
        uint itemBougtId; //Every item bought from the marketplace by a user will have an number, this is that number per holder
        address payable owner;
        bool isActiveHolder;
    }

    struct Gifted {
        uint GiftId; //Every item bought from the marketplace by a user will have an number, this is that number per holder
        uint itemId; //market item id to link to a specific market Item 
        uint timeGotten;
        uint timeGivenOut;
        address payable owner;       
        bool isActiveHolder;
    }

    struct MarketItem {
        uint itemId;
        uint tokenId;
        uint price;
        address nftContract;
        address owner;        
        bool sold;
    }

    mapping(uint256 => MarketItem) private idToMarketItem;
    mapping(uint256 => Holder) private buyIdToHolder; //mapping of buyId to the holder/ person that actually bought the item.
    mapping(uint256 => Gifted) private giftIdToHolder;

    //error Unauthorized(address sender);

    /* Places an item for sale on the marketplace */
    function createMarketItem(
        address nftContract,
        uint256 tokenId,
        uint256 price
    ) external onlyOwner nonReentrant {
        require(price > 0, "Price must be at least 1 wei");

        _itemIds.increment();
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

    function fetchMarketItem(uint256 tokenId)
        external
        view
        returns (MarketItem memory)
    {
        return idToMarketItem[tokenId];
    }

    function buyNft(address nftContract, uint64 itemId)
        external
        payable
        nonReentrant
    {
        uint256 price = idToMarketItem[itemId].price;
        uint256 tokenId = idToMarketItem[itemId].tokenId;
        require(
            msg.value == price,
            "Please submit the asking price in order to complete the purchase"
        );

        IERC721(nftContract).safeTransferFrom(address(this), msg.sender, tokenId);
        IERC721(nftContract).safeTransferFrom(msg.sender, address(this), tokenId);

        idToMarketItem[itemId].sold = true;
        idToMarketItem[itemId].owner = msg.sender;
        _buyIds.increment();
        uint256 buyId = _buyIds.current();
       
        buyIdToHolder[buyId] = Holder(itemId, block.timestamp , 0, buyId, payable(msg.sender), true);

        emit NftBought(msg.sender, itemId, block.timestamp);
    }    

    function giftNft(
        address nftContract,
        address to,
        uint256 itemId
    ) external nonReentrant {
        uint256 totalMarketItems = _itemIds.current();
        uint256 tokenId = idToMarketItem[itemId].tokenId;
        //get total nos of marketItems
        address holder;
        uint256 buyId;
        bool isGifted;
        //get a holder where item Id == itemId passed
        for (uint256 i = 0; i < totalMarketItems; i++) {
            if (
                buyIdToHolder[i + 1].itemId == itemId &&
                buyIdToHolder[i + 1].isActiveHolder
            ) {
                holder = buyIdToHolder[i + 1].owner;
                buyId = i + 1;
                isGifted = false;
            } else if (
                giftIdToHolder[i + 1].itemId == itemId &&
                giftIdToHolder[i + 1].isActiveHolder
            ) {
                holder = giftIdToHolder[i + 1].owner;
                buyId = i + 1;
                isGifted = true;
            }
        }
        //require that msg.sender == owner
        require(
            holder == msg.sender,
            "You do not have permission to Gift this NFT as you are not the owner"
        );

        IERC721(nftContract).safeTransferFrom(holder, to, tokenId);
        //change owner IERC721
        // //change status of former holder to false
        if (isGifted) {
            giftIdToHolder[buyId].timeGivenOut = block.timestamp;
            giftIdToHolder[buyId].isActiveHolder = false;
        } else {
            buyIdToHolder[buyId].timeGivenOut = block.timestamp;
            buyIdToHolder[buyId].isActiveHolder = false;
        }
        //create new holder
        _giftIds.increment();
        uint256 giftId = _giftIds.current();
        giftIdToHolder[giftId] = Gifted(giftId, itemId, block.timestamp , 0, payable(to), true);
        emit NftGifted(holder, to, tokenId, block.timestamp);
    }    

    function sellNft(uint256 itemId, address nftContract)
        external
        nonReentrant
    {
        uint256 totalMarketItems = _itemIds.current();
        uint256 tokenId = idToMarketItem[itemId].tokenId;
        uint256 price = idToMarketItem[itemId].price;
        address holderAddress = IERC721(nftContract).ownerOf(tokenId);
        
       
        require(
            holderAddress == msg.sender,
            "You are not the current holder of this NFT"
        );
        uint256 datePurchased;
        uint256 buyId;
        bool isGifted;

        for (uint256 i = 0; i < totalMarketItems; i++) {
            if (
                buyIdToHolder[i + 1].itemId == itemId &&
                buyIdToHolder[i + 1].isActiveHolder
            ) {
                buyId = i + 1;
                isGifted = false;
                datePurchased = buyIdToHolder[i + 1].timeGotten;
            } else if (
                giftIdToHolder[i + 1].itemId == itemId &&
                giftIdToHolder[i + 1].isActiveHolder
            ) {
                buyId = i + 1;
                isGifted = true;
                datePurchased = giftIdToHolder[i + 1].timeGotten;
            }
            _buyIds.decrement();
        }

        //Calculate Cashout amount and emit premature Nft if isPrematureNft
        uint256 cashoutAmount = _calculateCashoutAmount(price, datePurchased, tokenId);

        //transfer to contract
        IERC721(nftContract).safeTransferFrom(
            msg.sender,
            address(this),
            tokenId
        );

        //change holderAddress status to false
        if (isGifted) {
            giftIdToHolder[buyId].timeGivenOut = block.timestamp;
            giftIdToHolder[buyId].isActiveHolder = false;
        } else {
            buyIdToHolder[buyId].timeGivenOut = block.timestamp;
            buyIdToHolder[buyId].isActiveHolder = false;
        }
        //change marketItem owner to address(0)
        idToMarketItem[itemId].owner = address(0);

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
        uint initialPrice,
        uint datePurchased,
        uint tokenId
    ) private returns (uint256) {
        uint256 amountPerday = initialPrice / 365 days;
        bool isUpToSixMonths;
        uint timeOfHold;
        (isUpToSixMonths, timeOfHold) = _getHoldTimeAndMaturityStatus(datePurchased);
        //convert timeOfHold to days
        uint256 daysHeld = timeOfHold / 1 days; //86400sec //convert to a round number
        if (isUpToSixMonths) {
            return amountPerday * daysHeld;
        } else {
         // uint cashoutAmount = (30 / 100) * initialPrice;
         uint cashoutAmount = amountPerday * daysHeld;
          emit TryingToSellPrematureNFT(msg.sender, tokenId, cashoutAmount);
          return cashoutAmount;
        }
    }
}
