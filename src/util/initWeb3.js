const Web3 = require('web3');
const RPC_URL = `https://ropsten.infura.io/v3/8e58a7d1465e4e4dad9f0411de8fa160`


let web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));
window.web3 = web3

export default web3