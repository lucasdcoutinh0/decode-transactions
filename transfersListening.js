const ethers = require('ethers');
const contractAbi = require('./contracts/studyCoinAbi.json')
let provider = new ethers.providers.InfuraProvider("maticmum", "Your Infura Id");
const utils = ethers.utils
const contractAddress = "0x685cdefcd925074162d241e5ad252d6d25973c87"
const contract = new ethers.Contract(contractAddress,contractAbi,provider)

async function checkEvents(){
    let eventFilter = contract.filters.Transfer()
    console.log(eventFilter)
}


checkEvents()