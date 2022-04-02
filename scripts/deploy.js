const hre = require("hardhat");

async function main() {
  const Market = await hre.ethers.getContractFactory("NFTMarket");
  const market =await Market.deploy("0x16482ab5eA26AEB99b4AC92036944B3a92971BF9");
  await market.deployed(); 
  console.log("nftMarket deployed to:", market.address);

  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft =await NFT.deploy(market.address);
  await nft.deployed(); 
  console.log("nft deployed to:", nft.address); 
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  