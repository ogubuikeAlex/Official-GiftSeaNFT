// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "hardhat/console.sol";

contract OtherTwo is Ownable, ReentrancyGuard {
    address payable internal _admin;

    modifier isAdmin() {
        require(
            msg.sender == _admin || msg.sender == owner(),
            "Error 401 : Unauthorized"
        );
        _;
    }

    function getBalance() public view isAdmin returns (uint256) {
        return address(this).balance;
    }

    function withdrawMoney() external isAdmin nonReentrant {
        
        address payable to = payable(msg.sender);
        uint amt = getBalance();

        (bool success, ) = to.call{value:amt}("");
        require(success, "Transfer failed.");
    }

    function withdrawMoneyTo(address _to) external onlyOwner nonReentrant {
        address payable to = payable(_to);
       uint amt = getBalance();

        (bool success, ) = to.call{value:amt}("");
        require(success, "Transfer failed.");
    }

    function setAdmin(address admin) external onlyOwner {
        _admin = payable(admin);
    }

    function getCurrentAdmin() external view isAdmin returns (address) {
        return _admin;
    }
}
