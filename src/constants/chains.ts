import {
  sepolia,
  polygonAmoy,
  seiDevnet,
  thunderTestnet,
  bobaSepolia,
  kakarotSepolia,
  sei,
  lisk,
  metalL2,
  liskSepolia,
} from "viem/chains";

export interface Chain {
  chainNo: number;
  chainId: number;
  name: string;
  providerUrl: string;
  incrementCountContractAdd: string;
  biconomyPaymasterApiKey: string;
  explorerUrl: string;
  isViem: boolean;
  chain: any | null;
  bundlerUrl: string;
  paymasterUrl: string;
};

export const chains: Chain[] = [
  {
    chainNo: 0,
    chainId: 11155111,
    name: "Ethereum Sepolia",
    providerUrl: "https://eth-sepolia.public.blastapi.io",
    incrementCountContractAdd: "0xd9ea570eF1378D7B52887cE0342721E164062f5f",
    biconomyPaymasterApiKey: "gJdVIBMSe.f6cc87ea-e351-449d-9736-c04c6fab56a2",
    explorerUrl: "https://sepolia.etherscan.io/tx/",
    isViem: true,
    chain: sepolia,
    bundlerUrl:
      "https://bundler.biconomy.io/api/v2/11155111/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44",
    paymasterUrl:
      "https://paymaster.biconomy.io/api/v1/11155111/gJdVIBMSe.f6cc87ea-e351-449d-9736-c04c6fab56a2",
  },
  {
    chainNo: 1,
    chainId: 80002,
    name: "Polygon Amoy",
    providerUrl: "https://rpc-amoy.polygon.technology/",
    incrementCountContractAdd: "0xfeec89eC2afD503FF359487967D02285f7DaA9aD",
    biconomyPaymasterApiKey: "TVDdBH-yz.5040805f-d795-4078-9fd1-b668b8817642",
    explorerUrl: "https://amoy.polygonscan.com/tx/",
    isViem: true,
    chain: polygonAmoy,
    bundlerUrl:
      "https://bundler.biconomy.io/api/v2/80002/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44",
    paymasterUrl:
      "https://paymaster.biconomy.io/api/v1/80002/TVDdBH-yz.5040805f-d795-4078-9fd1-b668b8817642",
  },
  {
    chainNo: 2,
    chainId: 713715,
    name: "Sei Devnet",
    providerUrl: "https://evm-rpc.arctic-1.seinetwork.io",
    incrementCountContractAdd: "0xCc0F84A93DB93416eb38bBaC27959a0E325E1C87",
    biconomyPaymasterApiKey: "Q0wkKY9iE.0defd30d-e8f3-49cb-a643-b052c0a3d094",
    explorerUrl: "https://seistream.app",
    isViem: true,
    chain: seiDevnet,
    bundlerUrl:
      "https://bundler.biconomy.io/api/v2/713715/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44",
    paymasterUrl:
      "https://paymaster.biconomy.io/api/v1/713715/Q0wkKY9iE.0defd30d-e8f3-49cb-a643-b052c0a3d094",
  },
  {
    chainNo: 3,
    chainId: 997,
    name: "5irechain Thunder",
    providerUrl: "https://rpc.testnet.5ire.network",
    incrementCountContractAdd: "0xcf29227477393728935BdBB86770f8F81b698F1A",
    biconomyPaymasterApiKey: "IH8Fsr4dq.5d461485-bb44-4b67-bb59-952bcdeb4d73",
    explorerUrl: "https://testnet.5irescan.io/",
    isViem: true,
    chain: thunderTestnet,
    bundlerUrl:
      "https://bundler.biconomy.io/api/v2/997/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44",
    paymasterUrl:
      "https://paymaster.biconomy.io/api/v1/997/IH8Fsr4dq.5d461485-bb44-4b67-bb59-952bcdeb4d73",
  },
  {
    chainNo: 4,
    chainId: 995,
    name: "5irechain Mainnet",
    providerUrl: "https://rpc.5ire.network",
    incrementCountContractAdd: "0x006BcC07B3128d72647F49423C4930F8FAb8A6C4",
    biconomyPaymasterApiKey: "Ij8PagQGD.e8bcedfd-1763-4f4f-b6a3-b32bd0576c03",
    explorerUrl: "https://5irescan.io",
    isViem: false,
    chain: null,
    bundlerUrl:
      "https://bundler.biconomy.io/api/v2/995/dewj402.wh1289hU-7E49-85b-af80-778ghyuYM",
    paymasterUrl:
      "https://paymaster.biconomy.io/api/v1/995/Ij8PagQGD.e8bcedfd-1763-4f4f-b6a3-b32bd0576c03",
  },
  {
    chainNo: 5,
    chainId: 28882,
    name: "Boba Sepolia",
    providerUrl: "https://sepolia.boba.network",
    incrementCountContractAdd: "0xcf29227477393728935BdBB86770f8F81b698F1A",
    biconomyPaymasterApiKey: "c_ZRZbM_B.c0ad33ae-56ea-44a4-a68e-1848565c4093",
    explorerUrl: "https://testnet.bobascan.com",
    isViem: true,
    chain: bobaSepolia,
    bundlerUrl:
      "https://bundler.biconomy.io/api/v2/28882/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44",
    paymasterUrl:
      "https://paymaster.biconomy.io/api/v1/28882/c_ZRZbM_B.c0ad33ae-56ea-44a4-a68e-1848565c4093",
  },
  {
    chainNo: 6,
    chainId: 288,
    name: "Boba Mainnet",
    providerUrl: "https://mainnet.boba.network",
    incrementCountContractAdd: "0xcf29227477393728935BdBB86770f8F81b698F1A",
    biconomyPaymasterApiKey: "_LKprEnUb.db6d5dc8-daca-4610-a0cb-224bcc14f4b0",
    explorerUrl: "https://eth.bobascan.com/",
    isViem: true,
    chain: null,
    bundlerUrl:
      "https://bundler.biconomy.io/api/v2/288/dewj402.wh1289hU-7E49-85b-af80-778ghyuYM",
    paymasterUrl:
      "https://paymaster.biconomy.io/api/v1/288/_LKprEnUb.db6d5dc8-daca-4610-a0cb-224bcc14f4b0",
  },
  {
    chainNo: 7,
    chainId: 1802203764,
    name: "Kakorat Sepolia",
    providerUrl: "https://sepolia-rpc-priority.kakarot.org",
    incrementCountContractAdd: "0x006BcC07B3128d72647F49423C4930F8FAb8A6C4",
    biconomyPaymasterApiKey: "R2dBqxHh_.31a6a61d-3bb9-4f5c-ab4d-c3f064115a97",
    explorerUrl: "https://sepolia.kakarotscan.org/",
    isViem: true,
    chain: kakarotSepolia,
    bundlerUrl:
      "https://bundler.biconomy.io/api/v2/1802203764/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44",
    paymasterUrl:
      "https://paymaster.biconomy.io/api/v1/1802203764/R2dBqxHh_.31a6a61d-3bb9-4f5c-ab4d-c3f064115a97",
  },
  {
    chainNo: 8,
    chainId: 1329,
    name: "Sei Mainnet",
    providerUrl: "https://evm-rpc.sei-apis.com/",
    incrementCountContractAdd: "0xcf29227477393728935BdBB86770f8F81b698F1A",
    biconomyPaymasterApiKey: "5qf_XJpWY.b73ac4f9-4438-42b5-a4fc-e2460067c350",
    explorerUrl: "https://seitrace.com",
    isViem: true,
    chain: sei,
    bundlerUrl:
      "https://bundler.biconomy.io/api/v2/1329/dewj402.wh1289hU-7E49-85b-af80-779ilts88",
    paymasterUrl:
      "https://paymaster.biconomy.io/api/v1/1329/5qf_XJpWY.b73ac4f9-4438-42b5-a4fc-e2460067c350",
  },
  {
    chainNo: 9,
    chainId: 1135,
    name: "Lisk",
    providerUrl: "https://rpc.api.lisk.com",
    incrementCountContractAdd: "0xcf29227477393728935BdBB86770f8F81b698F1A",
    biconomyPaymasterApiKey: "AXdaGFvDW.36aed83a-b8b8-48c1-a693-098703b0e658",
    explorerUrl: "https://blockscout.lisk.com",
    isViem: true,
    chain: lisk,
    bundlerUrl:
      "https://bundler.biconomy.io/api/v2/1135/dewj402.wh1289hU-7E49-85b-af80-1139jkl5r",
    paymasterUrl:
      "https://paymaster.biconomy.io/api/v1/1135/AXdaGFvDW.36aed83a-b8b8-48c1-a693-098703b0e658",
  },
  {
    chainNo: 10,
    chainId: 1740,
    name: "Metal L2 Testnet",
    providerUrl: "https://testnet.rpc.metall2.com",
    incrementCountContractAdd: "0xcf29227477393728935BdBB86770f8F81b698F1A",
    biconomyPaymasterApiKey: "wsscvLgUZ.c6ae8dad-e41c-4013-8f4d-bbb4d2518309",
    explorerUrl: "https://testnet.explorer.metall2.com",
    isViem: false,
    chain: null,
    bundlerUrl:
      "https://bundler.biconomy.io/api/v2/1740/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44",
    paymasterUrl:
      "https://paymaster.biconomy.io/api/v1/1740/wsscvLgUZ.c6ae8dad-e41c-4013-8f4d-bbb4d2518309",
  },
  {
    chainNo: 11,
    chainId: 1750,
    name: "Metal L2",
    providerUrl: "https://rpc.metall2.com",
    incrementCountContractAdd: "0xcf29227477393728935BdBB86770f8F81b698F1A",
    biconomyPaymasterApiKey: "6tfPQRhWq.16e5b9a0-d25e-49e4-b347-78e4081d75d9",
    explorerUrl: "https://explorer.metall2.com",
    isViem: true,
    chain: metalL2,
    bundlerUrl:
      "https://bundler.biconomy.io/api/v2/1750/dewj402.wh1289hU-7E49-85b-af80-1182bvng7",
    paymasterUrl:
      "https://paymaster.biconomy.io/api/v1/1750/6tfPQRhWq.16e5b9a0-d25e-49e4-b347-78e4081d75d9",
  },
  {
    chainNo: 12,
    chainId: 4202,
    name: "Lisk Sepolia",
    providerUrl: "https://rpc.sepolia-api.lisk.com",
    incrementCountContractAdd: "0xcf29227477393728935BdBB86770f8F81b698F1A",
    biconomyPaymasterApiKey: "l7kF2E-Hc.cd96ec32-6720-4081-8e03-0f6fe4d6988c",
    explorerUrl: "https://sepolia-blockscout.lisk.com",
    isViem: true,
    chain: liskSepolia,
    bundlerUrl:
      "https://bundler.biconomy.io/api/v2/4202/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44",
    paymasterUrl:
      "https://paymaster.biconomy.io/api/v1/4202/l7kF2E-Hc.cd96ec32-6720-4081-8e03-0f6fe4d6988c",
  },
];
