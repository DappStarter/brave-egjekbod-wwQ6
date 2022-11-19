require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski stone recipe praise pulp give kite army gas'; 
let testAccounts = [
"0x50403ef18d24b2a67104b52cccfaba427b8d368e1c8126ef9ed341f9d8dd19fb",
"0x702c22da756984e3cae1c71060f6339319004380431ab0d089991a9af2163749",
"0x5e33472440c70ac2bc4e8820f9d9078c1373211147bf2a68bc9df73bdddc7fa2",
"0x9e81489459627fb5e04abe99e32b80f36273148c2b9b26531a6c9a1abe769855",
"0xdc6f278abc78160eb5ec8f38ac95b622840d94a58fe40a6fed20d27f0b9f6a8b",
"0x6bb332dac5e09c980d2b7c241b3c2a49b0f1047ec85dc65788216ae47fc7ffb2",
"0xde562d41ea4001d10962da59f92d8d6be2ede2ab3594a72e22c9f6deff9b9ff2",
"0xe5fff7283ceb9511805ea43d3dab3cf052910d48192fe56b3287d1c8ceb7748e",
"0xb48e38de71e8f994e8bdd27bd4ebcc704050a829c1c8af6b4eba5b1915d2fffe",
"0x6fed048f66c0e1a1779a0d8c8abab2646ef5c3f9834c757d45801792602bbe08"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

