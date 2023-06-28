const characters = require("../utils/data.js")
const getCharacterId = function(req, res, id) {
    const char = characters.find(ch => ch.id === Number(id))
    if(char){
        return res.writeHead(200, { "Content-Type": "application/json" }).end(JSON.stringify(characters));
    } else {
        return res.writeHead(404, { "Content-Type": "text/plain" }).end(req)
    }
}