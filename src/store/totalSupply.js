const dUSDAddress = '0x9f875730BC7046bC9Bb189c731E2eD97EDBaC3D5';
const BRETAddr = '0x9f875730BC7046bC9Bb189c731E2eD97EDBaC3D5';
const minABI = [{
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}];

export default {
    state: {
        totalSupply: {
            nUSD: 0,
            BRET: 0
        }
    },
    actions: {
        async getTotalSupplyAction({
            state,
            commit
        }) {
            const dUSDContract = new web3.eth.Contract(minABI, dUSDAddress);
            const BRETContract = new web3.eth.Contract(minABI, BRETAddr);


            await dUSDContract.methods.totalSupply().call((error, balance) => {
                balance = balance / 1e18;
                let totalSupply = {}
                totalSupply.nUSD = balance
                commit("setTotalSupply", totalSupply)
                console.log('Pool current rewardPerSecond is: ' + balance)
            });

            await BRETContract.methods.totalSupply().call((error, balance) => {
                balance = balance / 1e18;
                let totalSupply = {}
                totalSupply.BRET = balance
                commit("setTotalSupply", totalSupply)
                console.log('Pool current rewardPerSecond is: ' + balance)
            });
        }
    },
    mutations: {
        setTotalSupply(state, totalSupply) {
            state.totalSupply = Object.assign({}, state.totalSupply, totalSupply)
        }
    }
}