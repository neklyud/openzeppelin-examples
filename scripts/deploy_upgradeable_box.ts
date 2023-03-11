import { ethers, upgrades } from "hardhat";

async function main() {
    const Box = await ethers.getContractFactory("BoxUpgradeble");
    console.log("Deploying box...");
    const box = await upgrades.deployProxy(Box, [42], { initializer: 'store' });
    await box.deployed();
    console.log('Box deployed to:', box.address);
}

main().then(()=> process.exit()).catch(
    error => {
        console.error(error);
        process.exit(1);
    }
)
