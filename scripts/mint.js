const { ethers } = require("hardhat");

async function main() {
    const contractAddress = "0x28E9460464c698fA15CC46B8Acc9BB0dc417FC63"; 
    const metadataURI = "ipfs://bafkreifwpybhxxn345ndqyv57y5xmucjzkbzf2p5q2h4lz7lpgusq3uxmm"; 

    const [owner] = await ethers.getSigners();
    const NFT = await ethers.getContractFactory("MyNFT");
    const nft = await NFT.attach(contractAddress);

    console.log("Minting NFT...");
    let txn = await nft.mintNFT(owner.address, metadataURI);
    await txn.wait();

    console.log("✅ NFT Minted Successfully!");
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
