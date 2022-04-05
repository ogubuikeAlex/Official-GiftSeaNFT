require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');

const { API_URL, PRIVATE_KEY, ropsten_url, ropsten_privateKey } = process.env;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,      
    },

    ropsten : {
      url : `${ropsten_url}`,
      accounts : [ropsten_privateKey]
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
