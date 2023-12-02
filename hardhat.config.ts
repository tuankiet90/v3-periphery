// import '@nomiclabs/hardhat-ethers'
// import '@nomiclabs/hardhat-etherscan'
// import '@nomiclabs/hardhat-waffle'
// import 'hardhat-typechain'
// import 'hardhat-watcher'

// const LOW_OPTIMIZER_COMPILER_SETTINGS = {
//   version: '0.7.6',
//   settings: {
//     evmVersion: 'istanbul',
//     optimizer: {
//       enabled: true,
//       runs: 2_000,
//     },
//     metadata: {
//       bytecodeHash: 'none',
//     },
//   },
// }

// const LOWEST_OPTIMIZER_COMPILER_SETTINGS = {
//   version: '0.7.6',
//   settings: {
//     evmVersion: 'istanbul',
//     optimizer: {
//       enabled: true,
//       runs: 1_000,
//     },
//     metadata: {
//       bytecodeHash: 'none',
//     },
//   },
// }

// const DEFAULT_COMPILER_SETTINGS = {
//   version: '0.7.6',
//   settings: {
//     evmVersion: 'istanbul',
//     optimizer: {
//       enabled: true,
//       runs: 1_000_000,
//     },
//     metadata: {
//       bytecodeHash: 'none',
//     },
//   },
// }

// export default {
//   networks: {
//     hardhat: {
//       allowUnlimitedContractSize: false,
//     },
//     mainnet: {
//       url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
//     },
//     ropsten: {
//       url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
//     },
//     rinkeby: {
//       url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
//     },
//     goerli: {
//       url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
//     },
//     kovan: {
//       url: `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
//     },
//     arbitrumRinkeby: {
//       url: `https://arbitrum-rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
//     },
//     arbitrum: {
//       url: `https://arbitrum-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
//     },
//     optimismKovan: {
//       url: `https://optimism-kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
//     },
//     optimism: {
//       url: `https://optimism-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
//     },
//   },
//   etherscan: {
//     // Your API key for Etherscan
//     // Obtain one at https://etherscan.io/
//     apiKey: process.env.ETHERSCAN_API_KEY,
//   },
//   solidity: {
//     compilers: [DEFAULT_COMPILER_SETTINGS],
//     overrides: {
//       'contracts/NonfungiblePositionManager.sol': LOW_OPTIMIZER_COMPILER_SETTINGS,
//       'contracts/test/MockTimeNonfungiblePositionManager.sol': LOW_OPTIMIZER_COMPILER_SETTINGS,
//       'contracts/test/NFTDescriptorTest.sol': LOWEST_OPTIMIZER_COMPILER_SETTINGS,
//       'contracts/NonfungibleTokenPositionDescriptor.sol': LOWEST_OPTIMIZER_COMPILER_SETTINGS,
//       'contracts/libraries/NFTDescriptor.sol': LOWEST_OPTIMIZER_COMPILER_SETTINGS,
//     },
//   },
//   watcher: {
//     test: {
//       tasks: [{ command: 'test', params: { testFiles: ['{path}'] } }],
//       files: ['./test/**/*'],
//       verbose: true,
//     },
//   },
// }


import 'hardhat-typechain'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan'

export default {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
    },
    deploy: {
      url: process.env.RPC_ENDPOINT,
      // gasPrice: 10000000000,
      // gas: 10000000,
      chainId: Number(process.env.CHAIN_ID),
      accounts: [process.env.PKEY as string],
      allowUnlimitedContractSize: true,
    },
    
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  solidity: {
    version: '0.7.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
      metadata: {
        // do not include the metadata hash, since this is machine dependent
        // and we want all generated code to be deterministic
        // https://docs.soliditylang.org/en/v0.7.6/metadata.html
        bytecodeHash: 'none',
      },
    },
  },
}
