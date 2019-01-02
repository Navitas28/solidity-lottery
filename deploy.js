const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');


const provider = new HDWalletProvider(
    'opinion tennis coyote acid adjust void pave acoustic bitter lock wild review',
    'https://rinkeby.infura.io/v3/f2cad38acd5e4a559d7eb5991fca6f81'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account: ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface)).deploy({ data: bytecode }).send({ gas: '1000000', from: accounts[0] });
	
	console.log(interface);

    console.log('Contract deployed to: ', result.options.address);

};

deploy();
