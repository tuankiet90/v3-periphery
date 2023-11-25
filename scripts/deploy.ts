import { ethers } from 'hardhat'

async function main() {
  if (!process.env.RPC_ENDPOINT || !process.env.PKEY) {
    throw 'Missing PRC or PKey!'
  }

  const [owner] = await ethers.getSigners()
  var signer = owner

  const v3Factory = '0x2d5083a170977395F81F32FeC483616FEbDA177b' //test
  const weth = '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889' //test

  const QuouterV2 = await ethers.getContractFactory('QuoterV2')
  const quouterV2 = await QuouterV2.deploy(v3Factory, weth)
  console.log('xxxx deploy QuouterV2 :', quouterV2.address)
  const TickLens = await ethers.getContractFactory('TickLens')
  const tickLens = await TickLens.deploy()
  console.log('xxxx deploy TickLens :', tickLens.address)

  const NFTDescriptorLib = await ethers.getContractFactory('NFTDescriptor')
  const nFTDescriptorLib = await NFTDescriptorLib.deploy()

  console.log('deploy nFTDescriptorLib ', nFTDescriptorLib.address)

  const NFTPositionDescriptor = await ethers.getContractFactory('NonfungibleTokenPositionDescriptor', {
    libraries: {
      NFTDescriptor: nFTDescriptorLib.address,
    },
  })
  const nFTPositionDescriptor = await NFTPositionDescriptor.deploy(weth)
  console.log('xxxx nFTPositionDescriptor :', nFTPositionDescriptor.address)

  const NonfungiblePositionManager = await ethers.getContractFactory('NonfungiblePositionManager')
  const nonfungiblePositionManager = await NonfungiblePositionManager.deploy(
    v3Factory,
    weth,
    nFTPositionDescriptor.address
  )

  console.log('deploy nonfungiblePositionManager ', nonfungiblePositionManager.address)

  const V3Migrator = await ethers.getContractFactory('V3Migrator')
  const v3Migrator = await V3Migrator.deploy(v3Factory, weth, nonfungiblePositionManager.address)

  console.log('deploy V3Migrator ', v3Migrator.address)

  const SwapRouter = await ethers.getContractFactory('SwapRouter')
  const swapRouter = await SwapRouter.deploy(v3Factory, weth)

  const contracts = [
    {
      quouterV2: quouterV2.address,
    },
    {
      tickLens: tickLens.address,
    },
    {
      nFTDescriptorLib: nFTDescriptorLib.address,
    },
    {
      nFTPositionDescriptor: nFTPositionDescriptor.address,
    },
    {
      nonfungiblePositionManager: nonfungiblePositionManager.address,
    },
    {
      V3Migrator: v3Migrator.address,
    },
    {
      swapRouter: swapRouter.address,
    },
  ]

  var fs = require('fs')
  fs.writeFileSync('address.json', JSON.stringify({ contracts }, null, 4))
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
