const characters = require("../utils/data.js");


// characters.length/59 14 personajes en 59 paginas del total 826
const getPage = (req, res) => {
  const { num } = req.params;
  const pageSize = 14;
  const startIndex = (num - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const slicedCharacters = characters.slice(startIndex, endIndex);

  if (slicedCharacters) {
    return res.status(200).json(slicedCharacters);
  }
  return res
    .status(404)
    .send("No existe la pagina.");
};

module.exports = {
  getPage
};
