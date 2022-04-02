require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },

    mainnet : {
      url : `${API_URL}`,
      accounts : [PRIVATE_KEY]
    }
  },
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
};
