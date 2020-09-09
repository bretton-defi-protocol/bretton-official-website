const Web3 = require('web3');
const RPC_URL = 'https://mainnet.infura.io/v3/58073b4a32df4105906c702f167b91d2'


let web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));
window.web3 = web3

export default web3