const fs = require('node:fs')

fs.readdir('.', (err, files) => {
    if (err) {
        console.log(err)
    }
    console.log(files)
})