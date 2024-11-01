// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract ResponseProtocol {

    event ResponseCallback(uint256 effectiveness, address sender);

    constructor(){
    }

    function responseCallback(uint256 _effectiveness) external {
        emit ResponseCallback(_effectiveness, msg.sender);
    }
}
