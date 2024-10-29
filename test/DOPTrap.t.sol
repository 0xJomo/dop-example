pragma solidity ^0.8.9;

import {Test, console2} from "forge-std/Test.sol";
import "../src/mock/MockOpenOracleCommonDataFeed.sol";
import "../src/DOPTrap.sol";

contract DOPTrapTest is Test {
    struct EffectivenessDataPoint {
        uint256 effectiveness;
        uint256 effectivenessScore;
        uint32 startBlock;
        uint32 endBlock;
    }

    DOPTrap public dopTrap;
    MockOpenOracleCommonDataFeed public mockFeed;

    function setUp() public {
        dopTrap = new DOPTrap();
        mockFeed = new MockOpenOracleCommonDataFeed();
    }

    function testDOPTrapSuccess() public {
        bytes[] memory collectArray = new bytes[](2);
        setData(uint256(9789498224394283));
        bytes memory collectBytesOne = dopTrap.collect();
        collectArray[0] = collectBytesOne;
        setData(uint256(9789498224394285));
        bytes memory collectBytesTwo = dopTrap.collect();
        collectArray[1] = collectBytesTwo;
        (bool shouldRespond, ) = dopTrap.shouldRespond(collectArray);
        assertTrue(
            shouldRespond,
            "Trap should be triggered with larger effectiveness"
        );
    }

    function setData (uint256 effectiveness) private{
        bytes memory effectivenessBytes = abi.encodePacked(effectiveness);
        // more data struct
        /*
        abi.encodePacked(uint256,uint256,uint256)
        */
        mockFeed.mockData(effectivenessBytes);
    }

    function testDOPTrapFail() public {
        bytes[] memory collectArray = new bytes[](2);
        setData(uint256(9789498224394283));
        bytes memory collectBytesOne = dopTrap.collect();
        collectArray[0] = collectBytesOne;
        setData(uint256(9789498224394284));
        bytes memory collectBytesTwo = dopTrap.collect();
        collectArray[1] = collectBytesTwo;
        (bool shouldRespond, ) = dopTrap.shouldRespond(collectArray);
        assertTrue(
            !shouldRespond,
            "Trap should not be triggered with smaller effectiveness"
        );
    }

}
