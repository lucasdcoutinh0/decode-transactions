// Require Ethers //
const ethers = require('ethers');
// Set Provider //
let provider = new ethers.providers.InfuraProvider("maticmum", "Your Infura Id");
// Shortcut to utils //
const utils = ethers.utils
// Contract Infortions //
const contractAbi = require('./contracts/studyCoinAbi.json')
const contractAddress = "0x685cdefcd925074162d241e5ad252d6d25973c87"
const contract = new ethers.Contract(contractAddress,contractAbi,provider)
// Get Last Transfer Info //
const Transfers = async () => {
    const transferFilter = contract.filters.Transfer();
    const lastTransfer = await contract.queryFilter(transferFilter, -1000)
    const data = utils.defaultAbiCoder.decode(['uint256'], lastTransfer[0].data)
    console.log(Number(data)/Math.pow(10, 18))
  };
  
Transfers();
