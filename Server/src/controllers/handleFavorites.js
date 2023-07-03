let myFavorites = [];
console.log(myFavorites)

function postFav(req, res) {
  const pj = req.body;
  myFavorites.push(pj);
  return res.status(200).json(myFavorites);
}

function deleteFav(req, res) {
  const { id } = req.params;
//   let index = myFavorites.findIndex((personaje) => personaje.id === Number(id));
// myFavorites.splice(index, 1);
    myFavorites = myFavorites.filter(character => character.id !== Number(id))
  return res.status(200).json(myFavorites);
}
function getFav(req,res) {
  return res.status(200).send(myFavorites)
}
module.exports = {
  postFav,
  deleteFav,
  getFav
};
