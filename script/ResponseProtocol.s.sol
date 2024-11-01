// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import {ResponseProtocol} from "../src/ResponseProtocol.sol";

import "forge-std/Script.sol";

contract ResponseProtocolDeployer is Script {

    function run() external {
        vm.startBroadcast();

        _deployResponseProtocol(

        );
        vm.stopBroadcast();
    }

    function _deployResponseProtocol(

    ) internal {
        ResponseProtocol responseProtocol = new ResponseProtocol();
    }
}

