const fs = require('fs');
const path = require('path');
console.log("############### start");

const rs = fs.createReadStream(path.join(__dirname, 'files', 'stream.txt'), { encoding: 'utf-8' });
const ws = fs.createWriteStream(path.join(__dirname, 'files', 'streamed.txt'));

// rs.on('data', (chunkData) => {
//     ws.write(chunkData);
// })
rs.pipe(ws)
rs.on('end', () => {
    console.log('stream ended but still have async tasks doing their thing')
    fs.unlinkSync(path.join(__dirname, 'files', 'stream.txt'))
  })
console.log("############### end");