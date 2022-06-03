const ethers = require('ethers');
let provider = new ethers.providers.InfuraProvider("maticmum", "d13778b232614309af22fda20a18a3af");
const utils = ethers.utils

async function transactionReciept(){
    const reciept = await provider.getTransactionReceipt("0xdec5f692d8ad2f22b837608bc42001b4def19b4423d103f40eb9a4f8d06095e3")
    const logs = reciept.logs[0]
    const data = utils.defaultAbiCoder.decode(['uint256'], logs.data)
    console.log("Transfered Value: " + data[0].toString())
}

transactionReciept();
