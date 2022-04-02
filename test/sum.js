const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFTMARKET", function () {
  it("Should create market Item", async function () {
    const [x, buyerAddress, thirdAddress, fourth] = await ethers.getSigners()

    const Market = await ethers.getContractFactory("NFTMarketTwo");
    const market = await Market.deploy(thirdAddress.address);
    await market.deployed();

    const NFT = await ethers.getContractFactory("NFT");
    const nft = await NFT.deploy(market.address);
    await nft.deployed();
    const nftContractAddress = nft.address;

    const auctionPrice = ethers.utils.parseUnits("300", "ether");

    await nft.createToken("https://www.mytokenlocation.com")
    await nft.createToken("https://www.mytokenlocation2.com")
    await nft.createToken("https://gateway.pinata.cloud/ipfs/QmcT8VmrFw9scDqZKYCGnz9kQ9CBYed3JfWFt1qDHRr66w")
    await nft.createToken("https://gateway.pinata.cloud/ipfs/QmcT8VmrFw9scDqZKYCGnz9kQ9CBYed3JfWFt1qDHRr66w")

    await market.createMarketItem(nftContractAddress, 1, auctionPrice)
    await market.createMarketItem(nftContractAddress, 2, auctionPrice)
    await market.createMarketItem(nftContractAddress, 3, auctionPrice)
    await market.createMarketItem(nftContractAddress, 4, auctionPrice)

    let bal = await market.getBalance()

    console.log("bal", bal.toString());

    console.log(3)
    console.log(4)
    // console.log(buyerAddress)
    await market.connect(buyerAddress).buyNft(nftContractAddress, 1, { value: auctionPrice })
    console.log(5)
    await (await market.connect(buyerAddress).buyNft(nftContractAddress, 2, { value: auctionPrice })).wait()
    console.log(6)
    //  let bal = await market.getBalance();
    //  console.log(bal.toNumber())
    // let items = await market.fetchMarketItems();

    //   console.log('items: ', items)
    //     let ap = await nft.connect(buyerAddress).giveResaleApproval(1);
    //     console.log("7a")

    //     await ap.wait();
    //     console.log(7)
    //     let kini = await market.connect(buyerAddress).giftNft(nftContractAddress, thirdAddress.address, 2);
    //     let t = await kini.wait();
    //     //console.log("t", t)

    //     let apx = await nft.connect(buyerAddress).giveResaleApproval(1);
    //     await apx.wait()
    //     console.log(12)

    //     let guf = await market.connect(buyerAddress).sellNft(1, nftContractAddress, auctionPrice);
    //     console.log("yes")
    //     let init = await guf.wait();

    //     let ap2 = await nft.connect(thirdAddress).giveResaleApproval(2);
    //     await ap2.wait()
    //     console.log(12)

    //     let ownur = await nft.ownerOf(2)
    //     //console.log(ownur, "ownue");
    //   //  console.log(thirdAddress.address)
    //     // items = await market.fetchMarketItems();
    //     let kini2 = await market.connect(thirdAddress).giftNft(nftContractAddress, fourth.address, 2);
    //     await kini2.wait()
    // console.log("herer")
    //     // let ap3 = await nft.connect(fourth).giveResaleApproval(2);
    //     // await ap3.wait()
    //     // // console.log(await items);
    //     // let xm = await fourth.getBalance()
    //     // console.log("xm",xm.toString())
    //     // let guf2 = await market.connect(fourth).sellNft(2, nftContractAddress, auctionPrice);


    //     // console.log(13)
    // let init2 = await guf2.wait();

    let holders = await market.getAllHolders()

    console.log(holders)
    //get all holders
    //test getContractbalance

    bal = await market.getBalance()

    console.log("bal", bal.toString());
    //test withdraw

    console.log("x", (await x.getBalance()).toString())
   
    // let xd2 = await market.withdrawMoneyTo(fourth.address)
    // let th = await xd2.wait();
    console.log("x", (await x.getBalance()).toString())
    bal = await market.getBalance()

    console.log("bal", bal.toString());
    //test withdarw to
    //test setAdmin
    await market.setAdmin(buyerAddress.address) 
    bal = await market.connect(buyerAddress).getBalance()

    console.log("bal", bal.toString());

    // let xd = await market.withdrawMoney()
    // await xd.wait()
    await market.setAdmin(x.address) 
    let xdo = await market.withdrawMoney()
    await xdo.wait()

    bal = await market.getBalance()

    console.log("bal", bal.toString());

   let cadmin = await market.getCurrentAdmin()
   console.log(cadmin)
  });
});