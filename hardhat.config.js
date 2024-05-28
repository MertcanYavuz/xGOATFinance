require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
};
module.exports = {
  networks: {
    local: {
      url: "http://localhost:8545", // Varsayılan olarak, yerel Ethereum ağı için kullanılan RPC URL'si
    },
  },
  // Diğer yapılandırmalar...
};
