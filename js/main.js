'use strict';

const fs = require("fs").promises;
const converter = require("./converter");
const prettier = require("prettier");

if (process.argv.length >= 4) {
  const inputFilePath = process.argv[2];
  const outputFilePath = process.argv[3];

  fs.readFile(inputFilePath, "utf8")
    .then(data => converter(data))
    .then(jsCode => prettier.format(jsCode, { parser: "babel" }))
    .then(formattedCode => fs.writeFile(outputFilePath, formattedCode))
    .then(() => console.log(`The code has been successfully translated to ${outputFilePath}!`))
    .catch(err => console.error(err));
}