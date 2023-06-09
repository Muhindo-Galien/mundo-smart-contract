require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */

require('dotenv').config()

const GOERLI_RPC_URL =process.env.GOERLI_RPC_URL;
const DEPLOYER_KEY =process.env.DEPLOYER_KEY 

module.exports = {
   networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [DEPLOYER_KEY],
      chainId: 5,
    }
  },
  solidity: "0.8.17",
};
