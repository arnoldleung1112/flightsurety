var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";

// ganache-cli --mnemonic "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat" -a 20

module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/", 0, 50);
      },
      network_id: "*",// Match any network id
      gas: 99999999
    }
  },
  compilers: {
    solc: {
      version: "^0.4.25",
      optimizer: {
          enabled: true,
          runs: 200
      }
  }
  }
};