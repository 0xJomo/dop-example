// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import {ITrap} from "drosera-contracts/interfaces/ITrap.sol";
import "./interfaces/IOpenOracleCommonDataFeed.sol";
import "./library/BytesLib.sol";

contract DOPTrap is ITrap {

    using BytesLib for bytes;

    struct EffectivenessDataPoint {
        uint256 effectiveness;
        uint256 effectivenessScore;
        uint32 startBlock;
        uint32 endBlock;
    }

    uint256 public effectivenessScore = 9789498224394284;

    uint8 public taskType = 24;
    IOpenOracleCommonDataFeed public oracle = IOpenOracleCommonDataFeed(0x2e234DAe75C793f67A35089C9d99245E1C58470b);

    function collect() external view override returns (bytes memory) {
        // getoperatoreffectiveness
        (bytes memory result,,,uint32 startBlock,uint32 endBlock) = oracle.latestRoundData(taskType);
        // more data struct
        /*result.toUint256(0);result.toUint256(32);result.toUint256(64)*/
        uint256 effectiveness = result.toUint256(0);
        return abi.encode(EffectivenessDataPoint({effectiveness: effectiveness,effectivenessScore: effectivenessScore, startBlock: startBlock, endBlock: endBlock}));
    }

    function shouldRespond(
        bytes[] calldata data
    ) external pure override returns (bool, bytes memory) {
        uint256 len = data.length;
        if (len < 2) {
            return (false, bytes(""));
        }
        /*        Drosera has Trap:
            1. if current (p2p.org) performance score < TOP-10 Node operators
            2. and withdraw queue < X1 days
            3. and gas fees < Y usdc
            4. and stake queue < X2 days
            5. → re-delegate X% of stake stake*/
        for (uint256 i = 0; i < len; i++) {
            EffectivenessDataPoint memory effectivenessPoint = abi.decode(data[i], (EffectivenessDataPoint));
            if(effectivenessPoint.effectiveness > effectivenessPoint.effectivenessScore){
                return (true, bytes(""));
            }
        }

        return (false, bytes(""));
    }
}