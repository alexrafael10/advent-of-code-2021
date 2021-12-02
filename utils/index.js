const path = require("path");
const fs = require("fs");
const readline = require("readline");

module.exports = {
  processLineByLine: async function (filePath) {
    console.log(process.cwd());
    const fileStream = fs.createReadStream(path.join(process.cwd(), filePath));

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    const lines = [];
    for await (const line of rl) {
      lines.push(line);
    }

    return lines;
  },
};
