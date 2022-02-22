// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol"

import "hardhat/console.sol";

contract NFTMarket is ReentrancyGuard, Ownable{
  using Counters for Counters.Counter;
  Counters.Counter private _itemIds;
  Counters.Counter private _itemsSold; //When a person sells back to the market place increment this number
  Counters.Counter private _buyIds; //When a person buys from the market place increment this number
  Counters.Counter private _giftIds; //When a person gifts

  event NftBought(address indexed acquirer, uint indexed tokenId, uint timeGotten);
  event NftGifted(address indexed from, address indexed to, uint indexed tokenId);
  event TryingToSellPrematureNFT(address indexed sender, uint indexed tokenId, uint indexed amount);
  event MintSucces (address sender);  
 

  constructor() {}

  struct Holder {
    uint itemBougtId; //Every item bought from the marketplace by a user will have an number, this is that number per holder
    uint itemId; //market item id to link to a specific market Item
    address payable owner;
    uint timeGotten;
    uint timeGivenOut;
    bool isActiveHolder;
}

struct Gifted {
    uint GiftId; //Every item bought from the marketplace by a user will have an number, this is that number per holder
    uint itemId; //market item id to link to a specific market Item
    address payable owner;
    uint timeGotten;
    uint timeGivenOut;
    bool isActiveHolder;
}

  struct MarketItem {
    uint itemId;
    address nftContract;
    address owner;
    uint256 tokenId;    
    uint256 price;
    bool sold;
  }

  mapping(uint256 => MarketItem) private idToMarketItem;
  mapping(uint256 => Holder) private buyIdToHolder; //mapping of buyId to the holder/ person that actually bought the item.
  mapping(uint256 => Holder) private giftIdToHolder; 

  event MarketItemCreated (
    uint itemId,
    address indexed nftContract,
    address indexed owner,
    uint256 indexed tokenId,    
    address owner,
    uint256 price,
    bool sold
  );

  /* Returns the listing price of the contract */
  function getListingPrice() public view returns (uint256) {
    return listingPrice;
  }
  
  /* Places an item for sale on the marketplace */
  function createMarketItem(
    address nftContract,
    uint256 tokenId,
    uint256 price
  ) public payable nonReentrant {
    require(price > 0, "Price must be at least 1 wei");
    require(msg.value == listingPrice, "Price must be equal to listing price");

    _itemIds.increment();
    uint256 itemId = _itemIds.current();
  
    idToMarketItem[itemId] =  MarketItem(
      itemId,
      nftContract,
      tokenId,
      payable(msg.sender),
      payable(address(0)),
      price,
      false
    );

    IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);

    emit MarketItemCreated(
      itemId,
      nftContract,
      tokenId,
      msg.sender,
      address(0),
      price,
      false
    );
  }

  /* Returns all unsold market items */
  function fetchMarketItems() public view returns (MarketItem[] memory) {
    uint itemCount = _itemIds.current();
    uint unsoldItemCount = _itemIds.current() - _itemsSold.current();
    uint currentIndex = 0;

    MarketItem[] memory items = new MarketItem[](unsoldItemCount);
    for (uint i = 0; i < itemCount; i++) {
      if (idToMarketItem[i + 1].owner == address(0)) {
        uint currentId = i + 1;
        MarketItem storage currentItem = idToMarketItem[currentId];
        items[currentIndex] = currentItem;
        currentIndex += 1;
      }
    }
    return items;
  }

  /* Returns onlyl items that a user has purchased */
  function fetchMyNFTs() public view returns (MarketItem[] memory) {
    uint totalItemCount = _itemIds.current();
    uint itemCount = 0;
    uint currentIndex = 0;

    for (uint i = 0; i < totalItemCount; i++) {
      if (idToMarketItem[i + 1].owner == msg.sender) {
        itemCount += 1;
      }
    }

    MarketItem[] memory items = new MarketItem[](itemCount);
    for (uint i = 0; i < totalItemCount; i++) {
      if (idToMarketItem[i + 1].owner == msg.sender) {
        uint currentId = i + 1;
        MarketItem storage currentItem = idToMarketItem[currentId];
        items[currentIndex] = currentItem;
        currentIndex += 1;
      }
    }
    return items;
  }

  /* Returns only items a user has created */
  function fetchItemsCreated() public view returns (MarketItem[] memory) {
    uint totalItemCount = _itemIds.current();
    uint itemCount = 0;
    uint currentIndex = 0;

    for (uint i = 0; i < totalItemCount; i++) {
      if (idToMarketItem[i + 1].seller == msg.sender) {
        itemCount += 1;
      }
    }

    MarketItem[] memory items = new MarketItem[](itemCount);
    for (uint i = 0; i < totalItemCount; i++) {
      if (idToMarketItem[i + 1].seller == msg.sender) {
        uint currentId = i + 1;
        MarketItem storage currentItem = idToMarketItem[currentId];
        items[currentIndex] = currentItem;
        currentIndex += 1;
      }
    }
    return items;
  }

   function fetchMarketItem (uint tokenId) external view returns (MarketItem memory) {
      return idToMarketItem[tokenId];      
    }

   function buyNft (address nftContract, uint itemId) external payable nonReentrant  {
    uint price = idToMarketItem[itemId].price;
    uint tokenId = idToMarketItem[itemId].tokenId;
    require(msg.value == price, "Please submit the asking price in order to complete the purchase");

    IERC721(nftContract).transferFrom(address(this), msg.sender, tokenId);   
    idToMarketItem[itemId].sold = true;
    idToMarketItem[itemId].owner = msg.sender;
    _buyIds.increment();
    uint buyId = _buyIds.current();   

    buyIdToHolder[buyId] = Holder(buyId, itemId, msg.sender, now, 0, true);
    emit NFTBought(msg.sender, itemId, now);   
  }

//   function searchNft (string memory searchTerm) external view returns (MarketItem[] memory) {
//       //get current count of marketItems
//       //get a uint that will be
//   }

    function giftNft (address nftContract, address to, uint itemId) external nonReentrant {
        uint totalMarketItems = _itemIds.current();
        uint tokenId = idToMarketItem[itemId].tokenId;
        //get total nos of marketItems
        address holder;
        uint buyId;
        bool isGifted;
        //get a holder where item Id == itemId passed
        for (uint i = 0; i < itemCount; i++){
            if (buyIdToHolder[i + 1].itemId == itemId && buyIdToHolder[i + 1].isActiveHolder){
                holder = buyIdToHolder[i + 1].owner;
                buyId = i + 1;
                isGifted = false;
            } else if (giftIdToHolder[i + 1].itemId == itemId && giftIdToHolder[i + 1].isActiveHolder){
                holder = giftIdToHolder[i + 1].owner;
                buyId = i + 1;
                isGifted = true;
            }
        }
        //require that msg.sender == owner
        require (holder == msg.sender, "You do not have permission to Gift this NFT as you are not the owner");
       
        IERC721(nftContract).safeTransferFrom(holder, to , tokenId);           
        //change owner IERC721
        // //change status of former holder to false  
        if (isGifted){
            giftIdToHolder[buyId].timeGivenOut = now;
            giftIdToHolder[buyId].isActiveHolder = false;
        } else {
            buyIdToHolder[buyId].timeGivenOut = now;
            buyIdToHolder[buyId].isActiveHolder = false;
        } 
        //create new holder
        _giftIds.increment();
        uint giftId = _giftIds.current();
        giftIdToHolder[giftId] = Gifted(giftId, itemId, to, now, 0, true);
        emit NftGifted(holder, to, tokenId);
    }

    function sellNft (uint itemId) external nonReentrant {
       //require msg.sender is actual owner
       //getHoldTimeAndMaturityStatus
       //Calculate Cashout amount
       //emit if premature
       //transfer to contract
       //change holder status to false
       //change marketItem owner to address(0) 
       //emit event
    }
  }  