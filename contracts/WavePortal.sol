pragma solidity ^0.8.0;
import "hardhat/console.sol";

// SPDX-License-Identifier: UNLICENSED
contract WavePortal {
    uint256 totalWaves;

    constructor() {
        console.log("Dattebayo!!!");
    }
    // function getSender() public returns(uint){
    //     return msg.sender;
    // }
    function wave() public {
        totalWaves++;
        console.log("%s is waved", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves", totalWaves);
        return totalWaves;
    }
}
