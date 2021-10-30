
async function main() {
  const [owner, randomDude] = await ethers.getSigners();
  let mapWaves = {};
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy({
    value: hre.ethers.utils.parseEther('0.1'),
  });
  //let Twavecount = 0;
  await waveContract.deployed();
  console.log(
    `Deployed WavePortal to ${waveContract.address} by ${owner.address}`
  );
  let waveCount;
  waveCount = await waveContract.getTotalWaves();
  let contractBalance = await hre.ethers.provider.getBalance(
    waveContract.address
  );
  console.log(
    'Contract balance:',
    hre.ethers.utils.formatEther(contractBalance)
  );
  // console.log(`Total Waves: ${waveCount}`);
  let waveTxn;
  waveTxn = await waveContract.wave("yoooo");
  await waveTxn.wait();

  contractBalance = await hre.ethers.provider.getBalance(
    waveContract.address
  );
  console.log(
    'Contract balance:',
    hre.ethers.utils.formatEther(contractBalance)
  );

  waveCount = await waveContract.getTotalWaves();
  mapWaves[randomDude.address] = parseInt(waveCount);
  //Twavecount = [...waveCount];
  console.log(mapWaves);

  let allWaves = [];
  allWaves = await waveContract.getAllWaves();
  console.log(allWaves);



}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
