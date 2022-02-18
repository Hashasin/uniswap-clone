require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",

  networks: {
    rinkeby: {
      url: "https://eth-mainnet.alchemyapi.io/v2/u4mQC3vZba9P74MZELhrdTZN9_0L3CmF",
      accounts: [
        "cbfa9842f1bbeffb68927f9dbc888703c7bef457bcf88b29011947f53a17cbad",
      ],
      gas: 2100000,
      gasPrice: 8000000000,
      saveDeployments: true,
    },
  },
};

// https://eth-mainnet.alchemyapi.io/v2/u4mQC3vZba9P74MZELhrdTZN9_0L3CmF
// cbfa9842f1bbeffb68927f9dbc888703c7bef457bcf88b29011947f53a17cbad

