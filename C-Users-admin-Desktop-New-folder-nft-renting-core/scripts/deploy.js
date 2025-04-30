const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners(); // Get the deployer's address

  console.log("Deploying NFTRental contract with deployer:", deployer.address);

  // Get the NFTRental contract factory
  const NFTRental = await hre.ethers.getContractFactory("NFTRental");

  // Deploy the NFTRental contract
  const nftRental = await NFTRental.deploy();

  // Log the deployed contract address
  console.log("✅ NFTRental contract deployed at:", nftRental.target);

}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
