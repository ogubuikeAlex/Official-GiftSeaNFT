// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ERC1155NFT is ERC1155, Ownable {
    using Strings for uint256;

     address contractAddress;   

    // uint256 public constant MAX_ID_PLUS_ONE = 11;
    uint256 public currentIndex = 1;
    string public name = "collection name";
    string public baseURI = "https://gateway.pinata.cloud/ipfs/QmSr75yS4bEPq4ND5TRuXhJKDT183a5XvtUVMoxtRomVLo/";

    mapping (uint => string) private _uris;

    constructor(address marketPlaceAddress) ERC1155("") {
        contractAddress = marketPlaceAddress;        
    }

    function createToken(uint amount, string memory _uri) external onlyOwner{
        uint256 _currentIndex = currentIndex;              
        
        _mint(msg.sender, _currentIndex, amount, "");
         _uris[_currentIndex] = _uri;
        unchecked {
            _currentIndex++;
        }
               
        currentIndex = _currentIndex;
        setApprovalForAll(contractAddress, true);
    }

    // function uri(uint256 id) public view virtual override returns(string memory) {
    //     require(id <= MAX_ID_PLUS_ONE, "invalid id");
    //     return string(abi.encodePacked(baseURI, id.toString(), ".json"));
    // }
   
   function uri(uint tokenId) override public view onlyOwner returns (string memory){
       return (_uris[tokenId]);
   }

   function setTokenUri(uint256 tokenId, string memory _uri) external onlyOwner{
    //    require(bytes(_uris[tokenId]).length == 0, "Uri already set");
       _uris[tokenId] = _uri;
   }

     function giveResaleApproval(uint256 tokenId) public {
        require(
            balanceOf(msg.sender, tokenId) != 0,            
            "You must own this NFT in order to resell it"
        );
        setApprovalForAll(contractAddress, true);
        return;
    }
}