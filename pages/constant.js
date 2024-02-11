export const API_URL = "​https://api-goerli.etherscan.io/api"
export const PRIVATE_KEY ="0x112D89e0F1D3E636B669753DD7eB6db60d8c4568"
export const contractAddress = "0x32aDca05aB9915D10553c6CcEAb3E4fb38c24c6D"
export const contractAbi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "fileName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ipfsHash",
				"type": "string"
			}
		],
		"name": "upload",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "fileName",
				"type": "string"
			}
		],
		"name": "getIPFSHash",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "fileName",
				"type": "string"
			}
		],
		"name": "isFileStored",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];