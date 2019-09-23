const fs = require('fs')

fs.writeFileSync('notes.txt', `My name is LiuBo.\n`)
const file = fs.openSync('notes.txt', 'a')
fs.appendFileSync(file,`My age is 28!`)