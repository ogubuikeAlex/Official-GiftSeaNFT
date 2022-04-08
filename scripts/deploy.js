const hre = require("hardhat");

async function main() {
  // const Market = await hre.ethers.getContractFactory("NFTMarket1155");
  // const market =await Market.deploy("0x16482ab5eA26AEB99b4AC92036944B3a92971BF9");
  // await market.deployed(); 
  // console.log("nftMarket deployed to:", market.address);

  const NFT = await hre.ethers.getContractFactory("ERC1155NFT");
  const nft =await NFT.deploy("0x546C572901d800180f154a1Db922ab78A7893210");
  await nft.deployed(); 
  console.log("nft deployed to:", nft.address); 
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });  