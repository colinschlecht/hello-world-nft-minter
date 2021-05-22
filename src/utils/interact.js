//wallet and smart contract interaction functions
require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey); 
// const contract = require("../../artifacts/contracts/HelloWorldNFT.sol/HelloWorldNFT.json"); 
const contractAddress = "0x50274041223B467Cc17030732b4A2Ab94fAFde7a";

export const connectWallet = async () => {
  if (window.ethereum) {
    //check if Metamask is installed
    try {
      const address = await window.ethereum.enable(); //connect Metamask
      const obj = {
        connectedStatus: true,
        status: "",
        address: address,
      };
      return obj;
    } catch (error) {
      return {
        connectedStatus: false,
        status: "🦊 Connect to Metamask using the button on the top right.",
      };
    }
  } else {
    return {
      connectedStatus: false,
      status:
        "🦊 You must install Metamask into your browser: https://metamask.io/download.html",
    };
  }
};
