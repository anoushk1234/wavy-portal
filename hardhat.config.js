require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

 module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: 'https://rinkeby-light.eth.linkpool.io/',
      accounts: ['844dac72a2a5d7206f35ee6b3a8c92c494ee2311569e7fe99f5a6c31debd783c'],
    },
  },
};