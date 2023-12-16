const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')


const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'snameNew.txt'), "utf-8")
        console.log(data);
        
        await fsPromises.unlink(path.join(__dirname, 'files', 'delete.txt')) // deleted file Throw error
        
        await fsPromises.writeFile(path.join(__dirname, 'files', 'sname.txt'), 'Old Data jjust writed filed')
        await fsPromises.appendFile(path.join(__dirname, 'files', 'sname.txt'), '\n\n this is new line')
        await fsPromises.rename(path.join(__dirname, 'files', 'sname.txt'), path.join(__dirname, 'files', 'snameNew.txt'))
        const dataNew = await fsPromises.readFile(path.join(__dirname, 'files', 'snameNew.txt'), "utf-8")
        console.log(dataNew);
    } catch (error) {
        console.error(error);
    }
}
fileOps()


// fs.readFile('./files/name.txt', 'utf-8', (erro,data) => {
//     if(erro) throw erro
//     console.log(data)
// })
// fs.readFile(path.join(__dirname,'files','name.txt'), 'utf-8', (erro,data) => {
//     if(erro) throw erro
//     console.log(data)
// })

// fs.writeFile(path.join(__dirname,'files','newFile.txt'),'this is file data', (error) =>{
//     if(error) throw error
//     console.log('file write completed')
//     fs.appendFile(path.join(__dirname,'files','newFile.txt'),'\n\nAppend work', (error) =>{
//         if(error) throw error
//         console.log('file append completed')
//         fs.rename(path.join(__dirname,'files','newFile.txt'), path.join(__dirname,'files','newFileRenamed.txt'), (err) => {
//             if (err) throw err;
//             console.log('Rename complete!');
//           })
//     })
// })

// console.log('done')

// process.on('uncaughtException', err =>{
//     console.error(err);
//     process.exit(1)
// })