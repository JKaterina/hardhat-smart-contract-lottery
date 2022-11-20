require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL // || "https://eth-goerli"
const PRIVATE_KEY = process.env.PRIVATE_KEY //|| "0xkey"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY // || "key"
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY // || "key"

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      blockConfirmations: 1,
    },
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5,
    }
  },
  solidity: {
    compilers: [{ version: "0.8.17" }, { version: "0.6.6" }],
}, 
    defaultNetwork: "hardhat",

    namedAccounts: {
        deployer: {
            default: 0,
        },
        player: {
            default: 1,
        },
    },

    mocha: {
      timeout: 200000
    },
    etherscan: {
      apiKey: ETHERSCAN_API_KEY
    },

  gasReporter: {
    enabled: false,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKETCAP_API_KEY,
    token: "MATIC",
},  
};
