const { hexStripZeros } = require("@ethersproject/bytes");
const { messagePrefix } = require("@ethersproject/hash");

async function main() {
  const [owner, randomDude] = await ethers.getSigners();
  let mapWaves = {};
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  //let Twavecount = 0;
  await waveContract.deployed();
  console.log(
    `Deployed WavePortal to ${waveContract.address} by ${owner.address}`
  );
  let waveCount;
  waveCount = await waveContract.getTotalWaves();
  // console.log(`Total Waves: ${waveCount}`);
  let waveTxn;
  waveTxn = await waveContract.wave();
  await waveTxn.wait();
  waveCount = await waveContract.getTotalWaves();
  mapWaves[randomDude.address] = parseInt(waveCount);
  //Twavecount = [...waveCount];
  console.log(mapWaves);
  // waveTxn = await waveContract.connect(randomDude).wave();
  // await waveTxn.wait();
  // waveCount = await waveContract.getTotalWaves();
  // mapWaves[randomDude.address] = parseInt(waveCount);
  // //Twavecount = [...waveCount];
  // console.log(mapWaves);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
