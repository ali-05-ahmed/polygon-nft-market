

describe("NFTMarket", function () {
  let Market
  let market
  let Factory
  let factory
  let NFT
  let nft
  let [_, person1, person2] = [1, 1, 1]

  it("Should create and execute market sales", async function () {
    [_, person1, person2] = await ethers.getSigners()
    Market = await ethers.getContractFactory("Market")
    market = await Market.deploy()
    await market.deployed()
    let marketAddress = market.address

    Factory = await ethers.getContractFactory("Factory")
    factory = await Factory.deploy(marketAddress)
    await factory.deployed()

    NFT = await ethers.getContractFactory("NFT")
    nft = await NFT.deploy(marketAddress, "minter", "nft", "www.defaultnft.com")
    await nft.deployed()
    nftContractAddress = nft.address

  })
  it("generate collection", async function () {

    let ss = await factory.connect(person1).createCollection("mynft", "nn", "www.google.com");
    await ss.wait()
    console.log("person 1 ", person1.address)
    console.log("collection", ss)
  })
  it("get collection URI", async function () {

    let col1 = await factory.ownerIdToCollection(person1.address, 0)
    console.log("collection 1", col1)
    let collection = await factory.getCollection(col1)
    let URI = await collection.baseURI()
    console.log("collection", collection)

  })




  // it("generate collection", async function () {

  //   let ss = await factory.connect(person1).createCollection();
  //   await ss.wait()
  //   console.log("person 1 ", person1.address)
  //   console.log("collection", ss.data)
  // })

  // it("check collection count", async function () {

  //   let ss = await factory.collections(_.address);
  //   console.log("collection", ss.toNumber())
  // })
  // it("check collection count", async function () {

  //   let ss = await factory.collections(person1.address);
  //   console.log("collection", ss.toNumber())
  // })
  // it("check collection address", async function () {
  //   let col1 = await factory.ownerIdToCollection(person1.address, 0)
  //   console.log("collection 1", col1)
  //   col1 = await factory.ownerIdToCollection(person1.address, 1)
  //   console.log("collection 2", col1)
  //   col1 = await factory.ownerIdToCollection(person1.address, 2)
  //   console.log("collection 3", col1)
  // })
  // it("generate collection", async function () {

  //   let ss = await factory.connect(person1).createCollection();
  //   await ss.wait()
  //   console.log("person 1 ", person1.address)
  //   console.log("collection", ss.data)
  // })
  // it("check collection address", async function () {
  //   let col1 = await factory.ownerIdToCollection(person1.address, 0)
  //   console.log("collection 1", col1)
  //   col1 = await factory.ownerIdToCollection(person1.address, 1)
  //   console.log("collection 2", col1)
  //   col1 = await factory.ownerIdToCollection(person1.address, 2)
  //   console.log("collection 3", col1)
  // })

})