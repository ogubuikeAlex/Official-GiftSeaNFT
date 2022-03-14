require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten : {
      url : "https://eth-ropsten.alchemyapi.io/v2/XhU0k1Ez-tRHJGULpJCPCd5WPF6cWMnv",
      accounts : ["5d00cef7a5705a1db1262c2b3ab5afe7d6b39259d464c927ccf8a804009f5419"]
    }
  },
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
};
