async function main() {
    const initialSupply = ethers.utils.parseEther("1000000"); 
    const SecureToken = await ethers.getContractFactory("SecureToken");
    const token = await SecureToken.deploy(initialSupply);
    await token.deployed();
    console.log(`SecureToken deployed to: ${token.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
