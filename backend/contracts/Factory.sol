// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Context.sol";
import "./NFT.sol";

import "hardhat/console.sol";

contract Factory is Context {

    address public market;
    
    mapping(address => mapping(uint256 => address)) public ownerIdToCollection;
    mapping(address => uint256) public collections;

    constructor(address _market){
    market = _market;
    }


function createCollection()public returns(address){
    uint256 id = collections[_msgSender()];
    NFT collection = new NFT(market);
    address addr = address(collection);
    ownerIdToCollection[_msgSender()][id]=addr;
    collections[_msgSender()]++;
    return addr;

}

}