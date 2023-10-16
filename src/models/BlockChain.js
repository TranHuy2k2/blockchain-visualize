import Block from "./Block";

class BlockChain {
  constructor() {
    this.chains = [];
    this.createGenesisBlock();
  }
  addBlock(data) {
    const lastBlock = this.getLatestBlock();
    const block = new Block(lastBlock.index + 1, data, lastBlock.hash);
    this.chains.push(block);
  }
  getLatestBlock() {
    return this.chains[this.chains.length - 1];
  }
  getBlock(index) {
    return this.chains[index];
  }

  createGenesisBlock() {
    const genesis = new Block(0, {}, "000");
    genesis.isGenesis = true;
    this.chains.push(genesis);
  }
  checkChainValidity() {
    for (const block of this.chains) {
      if (block.isGenesis) continue;
      // Malformed current block
      if (block.hash != block.calculateHash()) {
        return block;
      }
      const previousBlock = this.getBlock(block.index - 1);
      if (block.previousHash != previousBlock.hash) {
        return block;
      }
    }
    return null;
  }
  getChain() {
    return this.chains;
  }
  getBlock(index) {
    return this.chains[index];
  }
}
export default BlockChain;
