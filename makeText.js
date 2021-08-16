/** Command-line tool to generate Markov text. */

const fs = require('fs');
const process = require('process');
const axios = require('axios');

function makeText(path) {
  fs.readFile(path, 'utf-8', function (err, data) {
    if (err) {
      console.error(`Error reading ${path}: ${err}`);
      process.exit(1);
    }

    console.log(data);
  });
}

async function makeURLText(url) {
  try {
    let resp = await axios.get(url);
    console.log(resp.data.slice(0, 80), '...');
  } catch (err) {
    console.error(`Error fetching ${url}: ${err}`);
    process.exit(1);
  }
}

let type = process.argv[2];
let path = process.argv[3];

if (type === 'url') {
  makeURLText(path);
} else if (type === 'file') {
  makeText(path);
}
