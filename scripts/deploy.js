//const { ethers } = require("ethers");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("🏭Depoying contracts with the account " + deployer.address);
  console.log("💰Account balance :",( await deployer.getBalance()).toString());
  const Token = await ethers.getContractFactory("WavePortal");
  const token = await Token.deploy();

  console.log("🚀Deployed at " + token.address);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
