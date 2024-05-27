module.exports = {
  'HAI': `// Start of the program\n'use strict';\n`,
  'CAN HAS': '',
  'VISIBLE': (line) => line.split(' ')[1] === 'FILE' ? `console.log(data) ` : line.split('"')[1] === undefined ? `console.log(${line.split(' ')[1]});\n` : `console.log('${line.split('"')[1]}');\n`,
  'BTW': (line) => `// ${line.slice(3)}\n`,
  'OBTW': '/*\n',
  'TLDR': '*/\n',
  'PLZ OPEN FILE': (line) => `const fs = require('fs');\nfs.readFile('${line.split('"')[1]}', 'utf8', (err, data) => `,
  'AWSUM THX': '!err ? ',
  'O NOES': ': ',
  'INVISIBLE': (line) => `console.error('${line.split('"')[1]}'));\n`,
  'KTHXBYE': '// End of the program\n'
}