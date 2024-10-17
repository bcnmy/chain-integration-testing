const { ethers } = require("ethers");
const {
  createBundler,
  createSmartAccountClient,
  BiconomySmartAccountV2,
  PaymasterMode,
  getCustomChain,
} = require("@biconomy/account");
const { contractABI } = require("./contract/contractABI");
const { chains, Chain } = require("./constants/chains");
const { privateKeyToAccount } = require("viem/accounts");
const { createWalletClient, http } = require("viem");
const dotenv = require("dotenv");

dotenv.config();

if (!process.env.PRIVATE_KEY) {
  console.error("PRIVATE_KEY is not set in the environment variables");
  process.exit(1);
}

async function testChain(chain: any) {
  const provider = new ethers.providers.JsonRpcProvider(chain.providerUrl);
  let smartWallet, saAddress;

  console.log(`Testing ${chain.name}...`);

  if (chain.isViem) {
    console.log("Testing Viem Chain");

    try {
      // Setup signer
      const signer = new ethers.Wallet(
        process.env.PRIVATE_KEY as string,
        provider
      );

      console.log("Signer Address:", await signer.getAddress());

      const bundler = await createBundler({
        bundlerUrl: chain.bundlerUrl,
        userOpReceiptMaxDurationIntervals: {
          [chains.chainId]: 120000,
        },
        userOpReceiptIntervals: { [chains.chainId]: 3000 },
      });

      smartWallet = await createSmartAccountClient({
        signer: signer,
        biconomyPaymasterApiKey: chain.biconomyPaymasterApiKey,
        bundler: bundler,
        rpcUrl: chain.providerUrl,
        chainId: chains.chainId,
      });

      console.log("Smart Account", smartWallet);
      saAddress = await smartWallet.getAddress();
    } catch (error) {
      console.error("Error setting up smart wallet:", error);
    }
  } else {
    console.log("Testing Non-Viem Chain");
    try {
      const customChain = getCustomChain(
        chain.name,
        chain.chainId,
        chain.providerUrl,
        chain.explorerUrl
      );

      chain.chain = customChain;

      const pvtkey = process.env.PRIVATE_KEY;
      const account = privateKeyToAccount(`0x${pvtkey}`);

      const walletClientWithCustomChain = createWalletClient({
        account,
        chain: customChain,
        transport: http(),
      });

      smartWallet = await createSmartAccountClient({
        signer: walletClientWithCustomChain,
        bundlerUrl: chain.bundlerUrl,
        biconomyPaymasterApiKey: chain.biconomyPaymasterApiKey,
        customChain,
      });

      console.log("Biconomy Smart Account", smartWallet);
      saAddress = await smartWallet.getAccountAddress();
      console.log("Smart Account Address", saAddress);
    } catch (error) {
      console.error("Error setting up smart wallet for non-Viem chain:", error);
    }
  }

  const contract = new ethers.Contract(
    chain.incrementCountContractAdd,
    contractABI,
    provider
  );

  await testGetCount(chain);

    // Test increment
    try {
      const incrementTx = await contract.populateTransaction.increment();
      const tx = {
        to: chain.incrementCountContractAdd,
        data: incrementTx.data,
      };

      const userOpResponse = await smartWallet.sendTransaction(tx, {
        paymasterServiceData: { mode: PaymasterMode.SPONSORED },
      });

      const { transactionHash } = await userOpResponse.waitForTxHash();
      console.log("Increment Transaction Hash:", transactionHash);
      console.log("Explorer URL:", `${chain.explorerUrl}${transactionHash}`);

      // Verify increment
      const newCount = await contract.getCount();
      console.log("New Count:", newCount.toString());
    } catch (error) {
      console.error("Error during increment:", error);
    }

  console.log("--------------------");
}

async function testGetCount(chain: any) {
  try {
    const provider = new ethers.providers.JsonRpcProvider(chain.providerUrl);
    const contract = new ethers.Contract(
      chain.incrementCountContractAdd,
      contractABI,
      provider
    );
    const count = await contract.getCount();
    console.log("Current Count:", count.toString());
  } catch (error) {
    console.error("Error fetching count:", error);
  }
}

async function main() {
//   await testChain(chains[1]);
  await testGetCount(chains[1]);
}

main().catch(console.error);
