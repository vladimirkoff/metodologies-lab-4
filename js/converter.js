'use strict';

const dictionary = require("./dictionary")

async function converter(lolcode) {
  let jsCode = "";
  const normalizedCode = lolcode.replace(/\r\n/g, "\n");
  const lines = normalizedCode.split("\n");
  for (let line of lines) {
    line = line.trim();
    for (let command in dictionary) {
      if (line.startsWith(command)) {
        jsCode +=
          typeof dictionary[command] === "function"
            ? dictionary[command](line)
            : dictionary[command];
        break;
      }
    }
  }
  return jsCode;
}

module.exports = converter;
