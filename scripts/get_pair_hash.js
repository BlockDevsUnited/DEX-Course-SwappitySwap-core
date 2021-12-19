let ethers = require("ethers")
let pairBytecode = require("./pair_bycode.json")
let bytecode = "0x" + pairBytecode.object
let initCodeHash = ethers.utils.keccak256(bytecode)
console.log("INIT_CODE_PAIR_HASH = " + initCodeHash)
