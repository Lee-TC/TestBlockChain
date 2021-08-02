const Web3 = require('web3')
const rpcURL = 'https://ropsten.infura.io/v3/51e467cf060145b9ae42e36384d15a6d'
const web3 = new Web3(rpcURL)
const address = '0xEB3a73a5780F77f65889EBfd0a5B69E030c44C0f'
web3.eth.getBalance(address, (err, wei) => {
    balance = web3.utils.fromWei(wei, 'ether')
    console.log("balance: " + balance)
})
