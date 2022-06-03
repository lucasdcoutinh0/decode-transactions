# Ethers.js use cases

- On this repo we currently have 3 different js files: 
<br/>
    -> In the first one "transferListening" we use ethers.js to listen all the last transactions on the smart contract studyCoin, created and deployed by me on the mumbai networks
<br/>
    -> In the seconde one "decodingTransactions" we chose a transaction hash and get data from there.
<br/>
    -> We have the "index.js" where whe put this two togheter, listen all the last transactions on the smart contract and see how much was transfered
<br/>
    -> And in the file "revertedErrorDecode" we can decode an reverted error and discover why the transaction failed
 <br/>

- This examples are only the basics that we can do with Events and decode in ethers.js.
- In this demonstration I only used ethers.js and nodemon.
- If you want to try go to the <a href="https://mumbai.polygonscan.com/address/0x685cdefcd925074162d241e5ad252d6d25973c87">Polygon Scan</a> made a transaction and exec ```npm start``` on this repo and you gonna have the value of the last transaction.





