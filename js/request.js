const { ethers } = require('ethers');

const rpcEndpoint = 'https://ethereum-holesky-rpc.publicnode.com'
const contractAddress = '0x726974f8e7bAEBD67aF7E9a9cb5Dc84dF3694901';

// The ABI for your contract (simplified for this example)
const contractABI = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "__openOracleTaskManager",
                "type": "address",
                "internalType": "contract OpenOracleTaskManager"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "callbackLimit",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getDayAVGData",
        "inputs": [
            {
                "name": "taskType",
                "type": "uint8",
                "internalType": "uint8"
            },
            {
                "name": "dayTime",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "price",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "latestBlock",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getRoundData",
        "inputs": [
            {
                "name": "roundId",
                "type": "uint32",
                "internalType": "uint32"
            }
        ],
        "outputs": [
            {
                "name": "result",
                "type": "bytes",
                "internalType": "bytes"
            },
            {
                "name": "sd",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "timestamp",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "startBlock",
                "type": "uint32",
                "internalType": "uint32"
            },
            {
                "name": "endBlock",
                "type": "uint32",
                "internalType": "uint32"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "initialize",
        "inputs": [
            {
                "name": "initialOwner",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "__responderThreshold",
                "type": "uint8",
                "internalType": "uint8"
            },
            {
                "name": "__stakeThreshold",
                "type": "uint96",
                "internalType": "uint96"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "latestRoundAVGData",
        "inputs": [
            {
                "name": "taskType",
                "type": "uint8",
                "internalType": "uint8"
            }
        ],
        "outputs": [
            {
                "name": "price",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "latestBlock",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "latestRoundData",
        "inputs": [
            {
                "name": "taskType",
                "type": "uint8",
                "internalType": "uint8"
            }
        ],
        "outputs": [
            {
                "name": "result",
                "type": "bytes",
                "internalType": "bytes"
            },
            {
                "name": "sd",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "timestamp",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "startBlock",
                "type": "uint32",
                "internalType": "uint32"
            },
            {
                "name": "endBlock",
                "type": "uint32",
                "internalType": "uint32"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "owner",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "renounceOwnership",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "reportSourceInfo",
        "inputs": [
            {
                "name": "",
                "type": "uint8",
                "internalType": "uint8"
            },
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "",
                "type": "uint8",
                "internalType": "uint8"
            }
        ],
        "outputs": [
            {
                "name": "_reportCount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_reportDayAVG",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_currentDay",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "requestNewReport",
        "inputs": [
            {
                "name": "_taskType",
                "type": "uint8",
                "internalType": "uint8"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "requestNewReportCallback",
        "inputs": [
            {
                "name": "_taskType",
                "type": "uint8",
                "internalType": "uint8"
            },
            {
                "name": "requestId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "requestNewReportWithData",
        "inputs": [
            {
                "name": "_taskType",
                "type": "uint8",
                "internalType": "uint8"
            },
            {
                "name": "_taskData",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "requestNewReportWithDataCallback",
        "inputs": [
            {
                "name": "_taskType",
                "type": "uint8",
                "internalType": "uint8"
            },
            {
                "name": "_taskData",
                "type": "bytes",
                "internalType": "bytes"
            },
            {
                "name": "requestId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "saveLatestData",
        "inputs": [
            {
                "name": "task",
                "type": "tuple",
                "internalType": "struct IOpenOracleTaskManager.Task",
                "components": [
                    {
                        "name": "taskType",
                        "type": "uint8",
                        "internalType": "uint8"
                    },
                    {
                        "name": "taskCreatedBlock",
                        "type": "uint32",
                        "internalType": "uint32"
                    },
                    {
                        "name": "responderThreshold",
                        "type": "uint8",
                        "internalType": "uint8"
                    },
                    {
                        "name": "stakeThreshold",
                        "type": "uint96",
                        "internalType": "uint96"
                    },
                    {
                        "name": "creator",
                        "type": "address",
                        "internalType": "address payable"
                    },
                    {
                        "name": "creationFee",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            },
            {
                "name": "response",
                "type": "tuple",
                "internalType": "struct IOpenOracleTaskManager.WeightedTaskResponse",
                "components": [
                    {
                        "name": "referenceTaskIndex",
                        "type": "uint32",
                        "internalType": "uint32"
                    },
                    {
                        "name": "result",
                        "type": "bytes",
                        "internalType": "bytes"
                    },
                    {
                        "name": "sd",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "timestamp",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            },
            {
                "name": "metadata",
                "type": "tuple",
                "internalType": "struct IOpenOracleTaskManager.TaskResponseMetadata",
                "components": [
                    {
                        "name": "taskResponsedBlock",
                        "type": "uint32",
                        "internalType": "uint32"
                    }
                ]
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setCallbackLimit",
        "inputs": [
            {
                "name": "_callbackLimit",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setDefaultThresholds",
        "inputs": [
            {
                "name": "_responderThreshold",
                "type": "uint8",
                "internalType": "uint8"
            },
            {
                "name": "_stakeThreshold",
                "type": "uint96",
                "internalType": "uint96"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setThresholds",
        "inputs": [
            {
                "name": "taskType",
                "type": "uint8",
                "internalType": "uint8"
            },
            {
                "name": "_responderThreshold",
                "type": "uint8",
                "internalType": "uint8"
            },
            {
                "name": "_stakeThreshold",
                "type": "uint96",
                "internalType": "uint96"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setTimeRateAVG",
        "inputs": [
            {
                "name": "_taskType",
                "type": "uint8",
                "internalType": "uint8"
            },
            {
                "name": "_AVGEnable",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "timeRateAVGInfo",
        "inputs": [
            {
                "name": "",
                "type": "uint8",
                "internalType": "uint8"
            },
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "_reportCount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_reportDayAVG",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_currentDay",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_latestBlock",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "inputs": [
            {
                "name": "newOwner",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "Initialized",
        "inputs": [
            {
                "name": "version",
                "type": "uint8",
                "indexed": false,
                "internalType": "uint8"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "NewPriceReported",
        "inputs": [
            {
                "name": "taskType",
                "type": "uint8",
                "indexed": true,
                "internalType": "uint8"
            },
            {
                "name": "referenceTaskIndex",
                "type": "uint32",
                "indexed": false,
                "internalType": "uint32"
            },
            {
                "name": "result",
                "type": "bytes",
                "indexed": false,
                "internalType": "bytes"
            },
            {
                "name": "sd",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "timestamp",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "createdBlock",
                "type": "uint32",
                "indexed": false,
                "internalType": "uint32"
            },
            {
                "name": "respondedBlock",
                "type": "uint32",
                "indexed": false,
                "internalType": "uint32"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "name": "previousOwner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "newOwner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "UpdateAVGReported",
        "inputs": [
            {
                "name": "taskType",
                "type": "uint8",
                "indexed": true,
                "internalType": "uint8"
            },
            {
                "name": "sourceType",
                "type": "uint8",
                "indexed": true,
                "internalType": "uint8"
            },
            {
                "name": "dayTime",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "currentBlock",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    }
];

const ownerPrivateKey = 'd4abb0b9f0481d61dacd947b8d8a7238928ee1db211e2cd2417d8e819433504f'

// Example: Create a New Task
async function createNewTask() {
    const provider = new ethers.providers.JsonRpcProvider(rpcEndpoint);
    const wallet = new ethers.Wallet(ownerPrivateKey, provider);
    const contract = new ethers.Contract(contractAddress, contractABI, wallet);

    try {
        // Call the function
        const result = await contract.requestNewReportWithData(24,"0x");
        console.log('Function result:', result);
    } catch (error) {
        console.error('Error calling contract function:', error.message);
    }
}


console.log('Creating task....');
createNewTask();