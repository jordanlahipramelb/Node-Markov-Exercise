/** Textual markov chain generator */

class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== '');
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  // the	| cat, hat, hat
  // cat	| in
  // in	  | the, the
  // hat	| is, null
  // is	  | in

  makeChains() {
    //Map() is used because we are dealing with key-value pairs
    let chains = new Map();

    for (let i = 0; i < this.words.length; i += 1) {
      let word = this.words[i];
      let nextWord = this.words[i + 1] || null;

      if (chains.has(word)) {
        chains.get(word).push(nextWord);
      } else {
        chains.set(word, [nextWord]);
      }
    }

    return (this.chains = chains);
  }

  //picks random choice from array
  // putting static allows for this function to be called on the class itself
  static choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO

    // retrieve keys from Array created with chains in this class
    let keys = Array.from(this.chains.keys());
    // let ranChoice = keys(Math.floor(Math.random * keys.length));

    //pick random key
    let key = MarkovMachine.choice(keys);
    let outPut = [];

    while (outPut.length < numWords && key !== null) {
      // push key to outPut array
      outPut.push(key);
      //key is random key from chains
      key = MarkovMachine.choice(this.chains.get(key));
    }
    return outPut.join(' ');
  }
}

module.exports = {
  MarkovMachine,
};
