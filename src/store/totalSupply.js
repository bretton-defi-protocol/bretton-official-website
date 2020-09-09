const dUSDAddress = '0x1491DcBcDbfFDDFe8909c9Dd0Ef40Ef61be3750c';
const BRETAddr = '0x096dc18E816f3a39c84c42fE092658EBe57066d5';
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