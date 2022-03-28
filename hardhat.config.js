require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten : {
      url : "https://eth-ropsten.alchemyapi.io/v2/16k_1ASgiyJh18bnYvV8sW6aADZ7TQMm",
      accounts : ["1a4823d90bc72d354903a8b4ec71ec9c953393fcc87455e7b6145e3aefb9fdc2"]
    }
  },
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
};
