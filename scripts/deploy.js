const hre = require("hardhat");

async function main() {
  const Market = await hre.ethers.getContractFactory("NFTMarket1155");
  const market =await Market.deploy("0x9E2e7fA52b9a7989a0c2A018563C8ab6f3679dc2");
  await market.deployed(); 
  console.log("nftMarket deployed to:", market.address);

  const NFT = await hre.ethers.getContractFactory("ERC1155NFT");
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

  