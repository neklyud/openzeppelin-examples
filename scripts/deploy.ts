import { ethers } from "hardhat";

async function getAccounts() {
    const accounts = await ethers.provider.listAccounts();
    console.log(accounts);
    return accounts;
}

async function main() {
    const Box = await ethers.getContractFactory("Box");
    console.log("Deploying box...");
    const box = await Box.deploy();
    await box.deployed();
    console.log('Box deployed to:', box.address);
}

main().then(()=> process.exit()).catch(
    error => {
        console.error(error);
        process.exit(1);
    }
)
