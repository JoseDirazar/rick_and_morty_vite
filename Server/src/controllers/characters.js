const characters = require("../utils/data.js");
const getCharacterId = function (req, res, id) {
  const char = characters.find((ch) => ch.id === Number(id));
  
  if (char) {
    return res
      .writeHead(200, { "Content-Type": "application/json" })
      .end(JSON.stringify(char));
  } else {
    return res
      .writeHead(404, { "Content-Type": "text/plain" })
      .end("character not found.");
  }
};

module.exports = {
  getCharacterId
};