// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract SecureToken is ERC20, Pausable, Ownable, ReentrancyGuard {
    constructor(uint256 initialSupply) ERC20("SecureToken", "SERC") {
        _mint(msg.sender, initialSupply);
    }

    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount) 
        internal 
        override 
    {
        super._beforeTokenTransfer(from, to, amount);
        require(!paused(), "Token transfers are paused");
    }

    function burn(address account, uint256 amount) external onlyOwner nonReentrant {
        _burn(account, amount);
    }
}
