const express = require("express")
const server = express()
const router = require("./routes/index")
const morgan = require('morgan')
const PORT = 3001

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

server.use(express.json())
 
server.use(morgan("dev"))

server.use("/rickandmorty", router)

server.listen(PORT, () => console.log("localhost:" + PORT))

/* let http = require("http");
const characters = require("./utils/data.js");
const { getCharacterId, getPage } = require("./controllers/characters.js");



const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const url = req.url.split("/");
    const part1 = url[1]; 
    const part2 = url[2];
    const id = url[3];
    
    if (part1 === "rickandmorty" && part2 === "characters") {
      // axios.get("https://rickandmortyapi.com/api/character?page=1").then(result => result.data.results).then(characters => {
      //   return res
      //   .writeHead(200, { "Content-Type": "application/json" })
      //   .end(JSON.stringify(characters)); 
      // }).catch(error => {
      //   return res
      //   .writeHead(404, { "Content-Type": "text/plain" })
      //   .end("No existe la pagina.");
      // })
      return res
        .writeHead(200, { "Content-Type": "application/json" })
        .end(JSON.stringify(characters)); 
    }
    if (part1 === "rickandmorty" && part2 === "character") { 
      return getCharacterId(req, res, id); 
    }
    if(part1 === "rickandmorty" && part2 === "page") {
      return getPage(req, res, id)
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
 */