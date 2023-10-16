import sha512 from "crypto-js/sha512";
class Block {
  constructor(index, data, previousHash = "") {
    this.index = index;
    this.timestamp = new Date();
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
    this.isGenesis = previousHash === "";
    this.changed = false;
  }
  calculateHash() {
    const hash = sha512(
      JSON.stringify({
        previousHash: this.previousHash,
        index: this.index,
        timestamp: this.timestamp,
        data: this.data,
      })
    );
    return hash.toString();
  }
}

export default Block;
