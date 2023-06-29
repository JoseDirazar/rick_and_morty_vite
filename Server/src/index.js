let http = require("http");
const characters = require("./utils/data.js");
const { getCharacterId } = require("./controllers/characters.js");



const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const url = req.url.split("/");
    const part1 = url[1]; 
    const part2 = url[2];
    const id = url[3];
    console.log(url)
    if (part1 === "rickandmorty" && part2 === "characters") {
      return res
        .writeHead(200, { "Content-Type": "application/json" })
        .end(JSON.stringify(characters)); 
    }
    if (part1 === "rickandmorty" && part2 === "character") { 
      return getCharacterId(req, res, id); 
    }
    if (req.url === "/") {      
      return res  
        .writeHead(200, { "Content-Type": "text/plain" })
        .end("Server Rick & Morty");
    }
  })
  .listen(PORT, () => {
    console.log(`port: http://localhost:${PORT}`);
  });
