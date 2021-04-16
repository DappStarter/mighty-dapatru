require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'hope enroll sure trophy name rate magic around inner neck equal gas'; 
let testAccounts = [
"0x3ccd3da0aa75acf97d4e7acaaa0d5b92515573feae528f210cceab73b7870716",
"0xd7bc0d9d209858a812bbd12d6ebf79e1feb29785565a0fdd6989e4a2a07d2c4b",
"0x0fc75289e29cb35d4de74270426d171ad3c0bf5aa7b43ec5b755f33566792494",
"0xe34608e5efd9031dfc5df8542587ed058e13b4165f7384fc44c7c6d2d95e8605",
"0x9c8895d52eb96b82616cd98aa0efb1c139c06a09b6c308aaf421c4b20d0d9af9",
"0x0a416f16d90082e0b8efe360f71c7ed98a31352c487f9270a42b9dd91b366622",
"0x77761e13c5616f103f416d6417e75126c22cea2756b3d420d3cc04ce6c9071d4",
"0xdca57b64855049c386397b769d14015e6eb8afabb7ffd35b7ff55bd8ab5de946",
"0x460e50d9b4d8664c8a6f9008cced0fc05f2dfefdab2a8f6e62cceb3b77ad3561",
"0x640cc51fa1b80a37ba27f2d676be357482f89f207f857832f2c5a181c73fcd32"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


