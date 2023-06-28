let http = require("http")
let fs = require("fs")
let data = require("./utils/data")
const PORT = 3001

module.exports =
http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes("/rickandmorty/character")){
        const parsedUrl = url.parse(req.url, true);
        const characterId = parsedUrl.pathname.split('/').pop();
        
        fs.readFile("./utils/data.js", (err, data) => {
            
        })
    }

}
).listen(PORT, "localhost")