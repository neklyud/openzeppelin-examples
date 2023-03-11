/** @type import('hardhat/config').HardhatUserConfig */
import "@nomiclabs/hardhat-ethers";
import "@nomicfoundation/hardhat-toolbox";
import  "@openzeppelin/hardhat-upgrades"
import { CHAINS } from "./helpers/constant";

const mnemonic = process.env.MNEMONIC

export default {
  solidity: "0.8.0",
  networks: {
    goerli: {
      chainId: 5,
      url: CHAINS.goerli,
      accounts: {mnemonic: mnemonic},
    }
  }
};