const { ethers } = require("hardhat");

async function main() {
    const NFT = await ethers.getContractFactory("MyNFT");
    
    console.log("Deploying NFT contract...");
    const nft = await NFT.deploy();
    
    await nft.waitForDeployment();

    console.log("NFT Contract deployed to:", await nft.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
