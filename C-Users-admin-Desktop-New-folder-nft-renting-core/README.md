
# 🧾 **NFTRenting** Smart Contract

A decentralized NFT renting smart contract that allows NFT owners to rent out their assets and renters to use them for a limited time — securely and transparently on the **Core Blockchain**. Built using Solidity and Hardhat.

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repository-name.git
cd NFTRenting
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
PRIVATEKEY="YOUR_PRIVATE_KEY"
CORE_TEST2_SCAN_KEY="YOUR_CORE_TEST2_SCAN_KEY"
CORE_TEST1_SCAN_KEY="YOUR_CORE_TEST1_SCAN_KEY"
CORE_MAIN_SCAN_KEY="YOUR_CORE_MAIN_SCAN_KEY"
```

> ⚠️ **Important:** Never expose your private key or commit the `.env` file to version control.

---

## 🛠 Hardhat Commands

### Compile Contracts

```bash
npx hardhat compile
```

### Run Tests

```bash
npx hardhat test
```

### Deploy Contract

Use a deployment script:

```bash
npx hardhat run scripts/deploy.js --network core_testnet2
```

---

## 🔍 Contract Verification

You can verify the smart contract using Core block explorers:

```bash
npx hardhat verify --network core_testnet2 <deployed_contract_address> <constructor_args_if_any>
```

Make sure your `.env` contains the required block explorer API keys.

