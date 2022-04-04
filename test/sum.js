const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFTMARKET", function () {
  it("Should create market Item", async function () {
    const [x, buyerAddress, thirdAddress, fourth] = await ethers.getSigners()

    const Market = await ethers.getContractFactory("NFTMarket1155");
    const market = await Market.deploy(thirdAddress.address);
    await market.deployed();
    const NFT = await ethers.getContractFactory("ERC1155NFT");
    const nft = await NFT.deploy(market.address);
    await nft.deployed();
    const nftContractAddress = nft.address;
   

    const auctionPrice = ethers.utils.parseUnits("300", "ether");

    let txm = await nft.createToken(35, "uri")
    console.log("txm", ((await txm.wait()).events[0].args[3]).toNumber()) //GetTokenId
    console.log("txm", ((await txm.wait()).events[0].args[4]).toNumber()) //GetTotal mint
await nft.createToken(10, 
  "uri2")
    console.log("uri", await nft.uri(1))
    //console.log("txm", (await txm.wait()).events[0]) //GetTokenId
//     await nft.mint(2)

    await market.createMarketItem(nftContractAddress, 1, 3, auctionPrice)
    await market.createMarketItem(nftContractAddress, 2, 2, auctionPrice)
// console.log( (await market.GetCurrentMarketcount()).toNumber())

   
//     // await nft.createToken("https://gateway.pinata.cloud/ipfs/QmcT8VmrFw9scDqZKYCGnz9kQ9CBYed3JfWFt1qDHRr66w")
//     // await nft.createToken("https://gateway.pinata.cloud/ipfs/QmcT8VmrFw9scDqZKYCGnz9kQ9CBYed3JfWFt1qDHRr66w")

// //Use get total supply toknow how many was minted

   

//     // await market.createMarketItem(nftContractAddress, 4, auctionPrice)

//     // let bal = await market.getBalance()

//     // console.log("bal", bal.toString());

//     console.log(3)
//     console.log(4)
//   //   // console.log(buyerAddress)
    await market.connect(buyerAddress).buyNft(nftContractAddress, 1, { value: auctionPrice })
    console.log(5)
    await market.connect(buyerAddress).buyNft(nftContractAddress, 4, { value: auctionPrice })
//     console.log(6)
//      let bal = await market.getBalance();
//      console.log(bal.toString())
//   //  
// // let n = await nft.balanceOf(buyerAddress.address, 1);
// // console.log(n.toNumber());
//   //   //   console.log('items: ', items)
        let ap = await nft.connect(buyerAddress).giveResaleApproval(2);
        console.log("7a")

   await ap.wait();
     console.log(7)
        let kini = await market.connect(buyerAddress).giftNft(nftContractAddress, thirdAddress.address, 4);
        let t = await kini.wait();

             let items = await market.fetchMarketItems()
    console.log(items)
  //   //     //console.log("t", t)

//         let apx = await nft.connect(buyerAddress).giveResaleApproval(1);
//         await apx.wait()
//         console.log(12)

//         let guf = await market.connect(buyerAddress).sellNft(1, nftContractAddress, auctionPrice);
//         console.log("yes")
//         let init = await guf.wait();

//         let ap2 = await nft.connect(thirdAddress).giveResaleApproval(2);
//         await ap2.wait()
//         console.log(12)

//   //   //     let ownur = await nft.ownerOf(2)
//   //   //     //console.log(ownur, "ownue");
//   //   //   //  console.log(thirdAddress.address)
//   //   //     // items = await market.fetchMarketItems();
//         let kini2 = await market.connect(thirdAddress).giftNft(nftContractAddress, fourth.address, 4);
//         await kini2.wait()
//   //   // console.log("herer")
//         let ap3 = await nft.connect(fourth).giveResaleApproval(2);
//         await ap3.wait()
//   //   //     // // console.log(await items);
//   //   //     // let xm = await fourth.getBalance()
//   //   //     // console.log("xm",xm.toString())
//         let guf2 = await market.connect(fourth).sellNft(4, nftContractAddress, auctionPrice);


//         // console.log(13)
//     let init2 = await guf2.wait();


//     await market.connect(buyerAddress).buyNft(nftContractAddress, 4, { value: auctionPrice })
//     console.log(6)
//   //   let holders = await market.getAllHolders()

//   //   console.log(holders)
//   //   //get all holders
//   //   //test getContractbalance

//   //   bal = await market.getBalance()

//   //   console.log("bal", bal.toString());
//   //   //test withdraw

//   //   console.log("x", (await x.getBalance()).toString())
   
//   //   // let xd2 = await market.withdrawMoneyTo(fourth.address)
//   //   // let th = await xd2.wait();
//   //   console.log("x", (await x.getBalance()).toString())
//   //   bal = await market.getBalance()

//   //   console.log("bal", bal.toString());
//   //   //test withdarw to
//   //   //test setAdmin
//     await market.setAdmin(buyerAddress.address) 
//     bal = await market.connect(buyerAddress).getBalance()

//     console.log("bal", bal.toString());

//     let xd = await market.withdrawMoney()
//     await xd.wait()
//   //   await market.setAdmin(x.address) 
//   //   let xdo = await market.withdrawMoney()
//   //   await xdo.wait()

//     bal = await market.getBalance()

//     console.log("bal", bal.toString());

//    let cadmin = await market.getCurrentAdmin()
//    console.log(cadmin)
//    console.log(await market.owner())
  });
});