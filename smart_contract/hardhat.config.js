require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/2okFlffFbOc_iOxu3GsA11VrS4Z5WUZW",
      accounts: [
        "8fa5d4781735d255fbc7ae3f00822232ffd2d73b31bf043fc746e4bead23eafd",
      ],
    },
  },
};
