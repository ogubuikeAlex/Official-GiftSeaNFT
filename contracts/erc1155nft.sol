// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ERC1155NFT is ERC1155, Ownable {   

     address contractAddress;
    uint256 public currentIndex = 1;    

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
   
   function uri(uint tokenId) override public view returns (string memory){
       return (_uris[tokenId]);
   }

   function setTokenUri(uint256 tokenId, string memory _uri) external onlyOwner{
       _uris[tokenId] = _uri;
   }
//Chage to external
     function giveResaleApproval(uint256 tokenId) public {
        require(
            balanceOf(msg.sender, tokenId) != 0,            
            "You must own this NFT in order to resell it"
        );
        setApprovalForAll(contractAddress, true);
        return;
    }
}