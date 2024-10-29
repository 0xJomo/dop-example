// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "../interfaces/IOpenOracleCommonDataFeed.sol";

contract MockOpenOracleCommonDataFeed is IOpenOracleCommonDataFeed{

    bytes public data;
    /// @notice Returns the latest data
    function latestRoundData(uint8 taskType) view override external returns (
        bytes memory result,
        uint256 sd,
        uint256 timestamp,
        uint32 startBlock,
        uint32 endBlock
    ){
        // mock
        return (data, 0, block.timestamp, uint32(block.number), uint32(block.number));
    }

    function mockData(bytes memory _data) public {
        data = _data;
    }
}
