const fs = require('fs')
const path = require('path')
const http = require('http')
const requests = require('requests')

const server = http.createServer((req,res) =>{
    const htmlFile = fs.readFileSync(path.join(__dirname,"home.html"),'utf-8')
    if (req.url === '/') {
        console.log("request goted")
        requests("https://api.openweathermap.org/data/2.5/weather?q=ratangarh&appid=73dd03438211920877dde6537c721b1e")
        .on('data',(chunk) =>{
            const cdata = replaceValues(JSON.parse(chunk),htmlFile)
            // console.log(chunk)
            res.write(cdata)
        })
        .on('end',(err)=>{
            if(err) console.log(err)
            res.end()
        })
    }

})
const start = async () => {
    server.listen(1234,'127.0.0.1', () => {
        console.log("server listend");
    })
}
start()
function replaceValues(newValue,orgHtml) {
    let finalValues = orgHtml.replace("{%location%}",newValue.name)
    finalValues = finalValues.replace("{%country%}",newValue.sys.country)
    finalValues = finalValues.replace("{%tempval%}",newValue.main.temp)
    finalValues = finalValues.replace("{%tempmin%}",newValue.main.temp_min)
    finalValues = finalValues.replace("{%tempmax%}",newValue.main.temp_max)
    finalValues = finalValues.replace("{%tempstatus%}",newValue.weather[0].description)
    return finalValues;
}