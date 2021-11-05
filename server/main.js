const { BlockChain, Transaction } = require('./blockchain');

let chenBlockChain = new BlockChain();

chenBlockChain.createTransaction(new Transaction('address1', 'address2', 100));
chenBlockChain.createTransaction(new Transaction('address2', 'address1', 50));

console.log('\n Starting the miner...');
chenBlockChain.minePendingTransactions('myaddress');

console.log('my balance ', chenBlockChain.getBalanceOfAddress('myaddress'));

chenBlockChain.minePendingTransactions('myaddress');

console.log('my balance now', chenBlockChain.getBalanceOfAddress('myaddress'));

// console.log('Mining block 1...');
// chenBlockChain.addBlock(new Block(1, '02/01/2021', { amount: 4 }));
// console.log('Mining block 2...');
// chenBlockChain.addBlock(new Block(2, '03/01/2021', { amount: 40 }));
// chenBlockChain.chain[1].data = { amount: 100 };

// console.log(JSON.stringify(chenBlockChain, null, 4));
// console.log('is chain valid ?', chenBlockChain.isChainValid());

