const ethers = require('ethers')
const pairBytecode = require('./pair_bycode.json')
const bytecode = '0x' + pairBytecode.object
const initCodeHash = ethers.utils.keccak256(bytecode)
console.log('INIT_CODE_PAIR_HASH = ' + initCodeHash)
