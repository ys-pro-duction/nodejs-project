const fs = require('fs')
const path = require('path')
const http = require('http')
const requests = require('requests')
const querystring = require('querystring')
//const name = "bikaner"
const server = http.createServer((req,res) =>{
    const htmlFile = fs.readFileSync(path.join(__dirname,"home.html"),'utf-8')
try {
const query = req.url.split('?')[1];

  // Parse the query string
  const parsedQuery = querystring.parse(query);
  const name = parsedQuery.name;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=73dd03438211920877dde6537c721b1e`
console.log(url)
  // Get the value of the 'name' query parameter
    if ('/' === '/') {
console.log(name)
        console.log("request goted")
        requests(url)
        .on('data',(chunk) =>{
        	console.log(chunk)
        	if(chunk !== '{"cod":"400","message":"bad query"}'){
            const cdata = replaceValues(JSON.parse(chunk),htmlFile)
            
            res.write(cdata)
            }
        })
        .on('end',(err)=>{
            if(err) console.log(err)
            res.end()
        })
    }
} catch (err) {
console.log(err) 
 // Code to be executed if an error occurs
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
    finalValues = finalValues.replace("{%tempval%}",(newValue.main.temp-273.15).toFixed(2))
    finalValues = finalValues.replace("{%tempmin%}",(newValue.main.temp_min-273.15).toFixed(2))
    finalValues = finalValues.replace("{%tempmax%}",(newValue.main.temp_max-273.15).toFixed(2))
    finalValues = finalValues.replace("{%tempstatus%}",newValue.weather[0].description)
    return finalValues;
}
