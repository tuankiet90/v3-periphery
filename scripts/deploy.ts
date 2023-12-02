import { ethers } from 'hardhat'

async function main() {
  if (!process.env.RPC_ENDPOINT || !process.env.PKEY) {
    throw 'Missing PRC or PKey!'
  }

  const [owner] = await ethers.getSigners()
  var signer = owner

  const v3Factory = '0x0bba472537562E3d4C94c9D7cb8a75494bB79767' 
  const weth = '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270' // WMATIC
  //const nFTPositionDescriptor=`0x91ae842A5Ffd8d12023116943e72A606179294f3` // use nFTPositionDescriptor of uniswap.

  // const QuouterV2 = await ethers.getContractFactory('QuoterV2')
  // const quouterV2 = await QuouterV2.deploy(v3Factory, weth)
  // console.log('xxxx deploy QuouterV2 :', quouterV2.address)
  // const TickLens = await ethers.getContractFactory('TickLens')
  // const tickLens = await TickLens.deploy()
  // console.log('xxxx deploy TickLens :', tickLens.address)


  // const NFTDescriptorLib = await ethers.getContractFactory('NFTDescriptor')
  // const nFTDescriptorLib = await NFTDescriptorLib.deploy()

  // console.log('deploy nFTDescriptorLib ', nFTDescriptorLib.address)

  // const NFTPositionDescriptor = await ethers.getContractFactory('NonfungibleTokenPositionDescriptor', {
  //   libraries: {
  //     NFTDescriptor: `0x01c995ccF59D5f5f9E2FF18Cc8e6bC83beD24bB4`,
  //   },
  // })

  // const nFTPositionDescriptor = await NFTPositionDescriptor.deploy(weth)
  // console.log('xxxx nFTPositionDescriptor :', nFTPositionDescriptor.address)

//   const NonfungiblePositionManager = await ethers.getContractFactory('NonfungiblePositionManager')
//   const nonfungiblePositionManager = await NonfungiblePositionManager.deploy(
//     v3Factory,
//     weth,
//    `0x20a8bBE77D707E1A1b5edaDbFD07E9DA481AB3Fd`// use nFTPositionDescriptor of uniswap.
//   )

// console.log('deploy nonfungiblePositionManager ', nonfungiblePositionManager.address)

//   const V3Migrator = await ethers.getContractFactory('V3Migrator')
//   const v3Migrator = await V3Migrator.deploy(v3Factory, weth, "0xb3D74729b94083e610E0b5D5738a4607363259C8")
//  console.log('deploy V3Migrator ', v3Migrator.address)

  const SwapRouter = await ethers.getContractFactory('SwapRouter')
  const swapRouter = await SwapRouter.deploy(v3Factory, weth)

  console.log('deploy swapRouter ', swapRouter.address)

  // const UniswapInterfaceMulticall = await ethers.getContractFactory('UniswapInterfaceMulticall')
  // const uniswapInterfaceMulticall = await UniswapInterfaceMulticall.deploy()

  // console.log('deploy UniswapInterfaceMulticall ', uniswapInterfaceMulticall.address)

  // const contracts = [
  //   {
  //     quouterV2: quouterV2.address,
  //   },
  //   {
  //     tickLens: tickLens.address,
  //   },
  //   {
  //     nonfungiblePositionManager: nonfungiblePositionManager.address,
  //   },
  //   {
  //     V3Migrator: v3Migrator.address,
  //   },
  //   {
  //     swapRouter: swapRouter.address,
  //   },
  //   {
  //     uniswapInterfaceMulticall: uniswapInterfaceMulticall.address,
  //   },
  // ]

  // var fs = require('fs')
  // fs.writeFileSync('address.json', JSON.stringify({ contracts }, null, 4))
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
