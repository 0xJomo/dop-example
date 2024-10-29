// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface IOpenOracleCommonDataFeed {

    /// @notice Returns the latest data
    function latestRoundData(uint8 taskType) view external returns (
        bytes memory result,
        uint256 sd,
        uint256 timestamp,
        uint32 startBlock,
        uint32 endBlock
    );
}
