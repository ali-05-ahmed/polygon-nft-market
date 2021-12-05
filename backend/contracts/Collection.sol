// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./NFT.sol";

import "hardhat/console.sol";


contract Collection is NFT , Ownable{
    

    constructor(address marketplaceAddress,
    string memory name,
    string memory symbol,
    string memory baseURI_,address newOwner) NFT(marketplaceAddress,name,symbol,baseURI_){
        transferOwnership(newOwner);
    }

    function createToken(string memory tokenURI) public override onlyOwner returns (uint) {  
       return super.createToken(tokenURI);
    }

}