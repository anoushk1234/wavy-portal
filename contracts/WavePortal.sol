pragma solidity ^0.8.0;
import "hardhat/console.sol";

// SPDX-License-Identifier: UNLICENSED
contract WavePortal {
    uint256 totalWaves;
    uint256 private seed;
    event NewWave(address indexed from, uint256 timestamp, string message);

    // events stores the values in transaction logs
    constructor() payable {
        console.log("Dattebayo!!!");
        seed = (block.timestamp + block.difficulty) % 100;
    }

    struct Wave {
        address waver;
        uint256 timestamp;
        string message;
    }
    Wave[] waves;
    mapping(address => uint256) public lastWavedAt;

    // made a list waves that stores objects of type Wave
    // function getSender() public returns(uint){
    //     return msg.sender;
    // }
    function wave(string memory _message) public {
        require(
            lastWavedAt[msg.sender] + 5 minutes < block.timestamp,
            "Wait 5m"
        );
        lastWavedAt[msg.sender] = block.timestamp;
        totalWaves++;
        console.log("%s is waved", msg.sender);

        waves.push(Wave(msg.sender, block.timestamp, _message));
        emit NewWave(msg.sender, block.timestamp, _message);
        seed = (block.difficulty + block.timestamp + seed) % 100;

        /*
         * Give a 50% chance that the user wins the prize.
         */
        if (seed <= 50) {
            console.log("%s won!", msg.sender);

            /*
             * The same code we had before to send the prize.
             */
            uint256 prizeAmount = 0.0001 ether;
            require(
                prizeAmount <= address(this).balance,
                "Trying to withdraw more money than the contract has."
            );
            (bool success, ) = (msg.sender).call{value: prizeAmount}("");
            require(success, "Failed to withdraw money from contract.");
        }
    }

    function getAllWaves() public view returns (Wave[] memory) {
        return waves;
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves", totalWaves);
        return totalWaves;
    }
}
