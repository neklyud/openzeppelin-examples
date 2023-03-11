// test/Box.test.js
// Load dependencies
import { expect } from "chai";
import { ethers } from "hardhat";


describe('Box', function() {
    async function setup() {
        const Box = await ethers.getContractFactory('Box');
        const box = await Box.deploy();
        await box.deployed();
        return {Box, box};
    }

    it('retrieve returns a value prev stored', async function() {
        const { Box, box } = await setup();
        await box.store(42);
        expect(await box.retrieve()).to.be.equal(42);
    })
})