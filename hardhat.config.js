require("@nomiclabs/hardhat-waffle");


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    }
  },
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
};
