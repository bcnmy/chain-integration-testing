var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var ethers = require("ethers").ethers;
var _a = require("@biconomy/account"), createBundler = _a.createBundler, createSmartAccountClient = _a.createSmartAccountClient, BiconomySmartAccountV2 = _a.BiconomySmartAccountV2, PaymasterMode = _a.PaymasterMode, getCustomChain = _a.getCustomChain;
var contractABI = require("./contract/contractABI").contractABI;
var _b = require("./constants/chains"), chains = _b.chains, Chain = _b.Chain;
var privateKeyToAccount = require("viem/accounts").privateKeyToAccount;
var _c = require("viem"), createWalletClient = _c.createWalletClient, http = _c.http;
var dotenv = require("dotenv");
dotenv.config();
if (!process.env.PRIVATE_KEY) {
    console.error("PRIVATE_KEY is not set in the environment variables");
    process.exit(1);
}
function testChain(chain) {
    return __awaiter(this, void 0, void 0, function () {
        var provider, smartWallet, saAddress, signer, _a, _b, _c, bundler, error_1, customChain, pvtkey, account, walletClientWithCustomChain, error_2, contract, incrementTx, tx, userOpResponse, transactionHash, newCount, error_3;
        var _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    provider = new ethers.providers.JsonRpcProvider(chain.providerUrl);
                    console.log("Testing ".concat(chain.name, "..."));
                    if (!chain.isViem) return [3 /*break*/, 8];
                    console.log("Testing Viem Chain");
                    _f.label = 1;
                case 1:
                    _f.trys.push([1, 6, , 7]);
                    signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
                    _b = (_a = console).log;
                    _c = ["Signer Address:"];
                    return [4 /*yield*/, signer.getAddress()];
                case 2:
                    _b.apply(_a, _c.concat([_f.sent()]));
                    return [4 /*yield*/, createBundler({
                            bundlerUrl: chain.bundlerUrl,
                            userOpReceiptMaxDurationIntervals: (_d = {},
                                _d[chains.chainId] = 120000,
                                _d),
                            userOpReceiptIntervals: (_e = {}, _e[chains.chainId] = 3000, _e),
                        })];
                case 3:
                    bundler = _f.sent();
                    return [4 /*yield*/, createSmartAccountClient({
                            signer: signer,
                            biconomyPaymasterApiKey: chain.biconomyPaymasterApiKey,
                            bundler: bundler,
                            rpcUrl: chain.providerUrl,
                            chainId: chains.chainId,
                        })];
                case 4:
                    smartWallet = _f.sent();
                    console.log("Smart Account", smartWallet);
                    return [4 /*yield*/, smartWallet.getAddress()];
                case 5:
                    saAddress = _f.sent();
                    return [3 /*break*/, 7];
                case 6:
                    error_1 = _f.sent();
                    console.error("Error setting up smart wallet:", error_1);
                    return [3 /*break*/, 7];
                case 7: return [3 /*break*/, 13];
                case 8:
                    console.log("Testing Non-Viem Chain");
                    _f.label = 9;
                case 9:
                    _f.trys.push([9, 12, , 13]);
                    customChain = getCustomChain(chain.name, chain.chainId, chain.providerUrl, chain.explorerUrl);
                    chain.chain = customChain;
                    pvtkey = process.env.PRIVATE_KEY;
                    account = privateKeyToAccount("0x".concat(pvtkey));
                    walletClientWithCustomChain = createWalletClient({
                        account: account,
                        chain: customChain,
                        transport: http(),
                    });
                    return [4 /*yield*/, createSmartAccountClient({
                            signer: walletClientWithCustomChain,
                            bundlerUrl: chain.bundlerUrl,
                            biconomyPaymasterApiKey: chain.biconomyPaymasterApiKey,
                            customChain: customChain,
                        })];
                case 10:
                    smartWallet = _f.sent();
                    console.log("Biconomy Smart Account", smartWallet);
                    return [4 /*yield*/, smartWallet.getAccountAddress()];
                case 11:
                    saAddress = _f.sent();
                    console.log("Smart Account Address", saAddress);
                    return [3 /*break*/, 13];
                case 12:
                    error_2 = _f.sent();
                    console.error("Error setting up smart wallet for non-Viem chain:", error_2);
                    return [3 /*break*/, 13];
                case 13:
                    contract = new ethers.Contract(chain.incrementCountContractAdd, contractABI, provider);
                    return [4 /*yield*/, testGetCount(chain)];
                case 14:
                    _f.sent();
                    _f.label = 15;
                case 15:
                    _f.trys.push([15, 20, , 21]);
                    return [4 /*yield*/, contract.populateTransaction.increment()];
                case 16:
                    incrementTx = _f.sent();
                    tx = {
                        to: chain.incrementCountContractAdd,
                        data: incrementTx.data,
                    };
                    return [4 /*yield*/, smartWallet.sendTransaction(tx, {
                            paymasterServiceData: { mode: PaymasterMode.SPONSORED },
                        })];
                case 17:
                    userOpResponse = _f.sent();
                    return [4 /*yield*/, userOpResponse.waitForTxHash()];
                case 18:
                    transactionHash = (_f.sent()).transactionHash;
                    console.log("Increment Transaction Hash:", transactionHash);
                    console.log("Explorer URL:", "".concat(chain.explorerUrl).concat(transactionHash));
                    return [4 /*yield*/, contract.getCount()];
                case 19:
                    newCount = _f.sent();
                    console.log("New Count:", newCount.toString());
                    return [3 /*break*/, 21];
                case 20:
                    error_3 = _f.sent();
                    console.error("Error during increment:", error_3);
                    return [3 /*break*/, 21];
                case 21:
                    console.log("--------------------");
                    return [2 /*return*/];
            }
        });
    });
}
function testGetCount(chain) {
    return __awaiter(this, void 0, void 0, function () {
        var provider, contract, count, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    provider = new ethers.providers.JsonRpcProvider(chain.providerUrl);
                    contract = new ethers.Contract(chain.incrementCountContractAdd, contractABI, provider);
                    return [4 /*yield*/, contract.getCount()];
                case 1:
                    count = _a.sent();
                    console.log("Current Count:", count.toString());
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.error("Error fetching count:", error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testChain(chains[8])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main().catch(console.error);
