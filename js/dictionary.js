module.exports = {
  'HAI': `// Start of the program\n'use strict';\n`,
  'CAN HAS': '',
  'VISIBLE': (line) => line.split(' ')[1] === 'FILE' ? `console.log(data) ` : line.split('"')[1] === undefined ? `console.log(${line.split(' ')[1]});\n` : `console.log('${line.split('"')[1]}');\n`,
  'KTHXBYE': '// End of the program\n'
}