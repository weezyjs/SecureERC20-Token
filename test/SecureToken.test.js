const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SecureToken", function () {
    let Token, secureToken, owner, addr1, addr2;

    before(async function () {
        Token = await ethers.getContractFactory("SecureToken");
        [owner, addr1, addr2] = await ethers.getSigners();
    });

    beforeEach(async function () {
        secureToken = await Token.deploy(ethers.parseEther("1000"));
        await secureToken.deployed();
    });

    it("Should assign the initial supply to the owner", async function () {
        const ownerBalance = await secureToken.balanceOf(owner.address);
        expect(ownerBalance).to.equal(ethers.parseEther("1000")); 
    });
});

