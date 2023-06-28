let http = require("http");
const url = require("url");
let data = require("./utils/data");
const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url.includes("/rickandmorty/character")) {
      const parsedUrl = url.parse(req.url, true);
      const characterId = parsedUrl.pathname.split("/").pop();
      const dataCharacter = data.find(
        (character) => character.id === characterId
      );
      if (dataCharacter) {
        return res.writeHead(200, { "Content-Type": "application/json" }).end(JSON.stringify(dataCharacter));
      } else {
        return res.writeHead(404, { "Content-Type": "text/plain" }).end("json not found");
      }
      return;
    }
  })
  .listen(PORT, () => {
    console.log(`port: http://localhost:${PORT}`);
  });
