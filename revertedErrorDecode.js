const { ethers } = require("ethers");
let provider = new ethers.providers.InfuraProvider("maticmum", "Your Infura Project Id");


async function revertedErrorDecode(){
    try{
        const reciept = await provider.getTransaction('0x6d30217834ee538b5a99aad005a45ced8a22edd723542c741fb590ec33f12da6');
        let code = await provider.call(reciept, reciept.blockNumber)
    }catch (err) {
        console.log("Error: " + err.reason);
    }
        
    
}
revertedErrorDecode()
