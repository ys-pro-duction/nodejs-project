const fs = require('fs')

if (!fs.existsSync('./dirCreate')) {
    fs.mkdir('./dirCreate', (err) => {
        if (err) throw err
        console.log('dir created')
    })
}else {
    fs.rmdir('./dirCreate', (err) => {
        if (err) throw err
        console.log('dir deleted')
    })
}