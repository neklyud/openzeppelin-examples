import { ethers, upgrades } from "hardhat";

async function main() {
    const Box = await ethers.getContractFactory("BoxUpgradeble");
    console.log("Deploying box...");
    const box = await upgrades.deployProxy(Box, [42], { initializer: 'store' });
    await box.deployed();
    console.log('Box deployed to:', box.address);
    const BoxV2 = await ethers.getContractFactory('BoxUpgradebleV2');
    console.log('Upgrading Box...');
    await upgrades.upgradeProxy(box.address, BoxV2);
    console.log('Box upgraded');
}

main().then(()=> process.exit()).catch(
    error => {
        console.error(error);
        process.exit(1);
    }
)
