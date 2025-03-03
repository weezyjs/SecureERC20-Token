

# 🔒 SecureERC20-Token 🛡️  
🚀 A **secure & gas-optimized** ERC-20 token with built-in **security features** for DeFi applications.

![GitHub last commit](https://img.shields.io/github/last-commit/weezyjs/SecureERC20-Token)
![GitHub issues](https://img.shields.io/github/issues/weezyjs/SecureERC20-Token)
![GitHub stars](https://img.shields.io/github/stars/weezyjs/SecureERC20-Token?style=social)
![Solidity](https://img.shields.io/badge/Solidity-0.8.18-blue)

---

## 🔥 Features  
✅ **Pausable:** Allows the owner to pause all transfers in case of an attack.  
✅ **Reentrancy Guard:** Protects against reentrancy attacks.  
✅ **Ownable:** Only the owner can execute admin functions.  
✅ **Burnable:** Tokens can be destroyed, reducing supply.  
✅ **Secure OpenZeppelin Standards:** Reduces vulnerabilities using well-tested contracts.  

---

## 🛠️ **Installation & Setup**
### **1️⃣ Clone the Repository**

git clone https://github.com/weezyjs/SecureERC20-Token.git
cd SecureERC20-Token

2️⃣ Install Dependencies
```bash
npm install
```
3️⃣ Run Tests
```bash
npx hardhat test
```
**Deploying to Sepolia Testnet**
1️⃣ Set Up Environment Variables
Create a .env file and add:
```bash
SEPOLIA_URL="https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_KEY"
PRIVATE_KEY="YOUR_METAMASK_PRIVATE_KEY"
```
**🛑 NEVER share your private key!**

2️⃣ Compile the Contract
```bash
npx hardhat compile
```
3️⃣ Deploy to Sepolia
```bash
npx hardhat run scripts/deploy.js --network sepolia
```

✅ Copy the contract address and verify on Etherscan!

🛠 Author & Contact

👨‍💻 Developer: William Mwaisoloka

🔗 GitHub: Weezyjs

📧 Email: Williammwaisoloka@gmail.com

🚀 Happy BUIDLing! 🛠
