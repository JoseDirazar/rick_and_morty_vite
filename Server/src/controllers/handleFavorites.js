
let setFav = new Set()
let myFavorites = [];
//let myFavorites = [];



function postFav(req, res) {
  //console.log(req.body)
  const pj = req.body;
  myFavorites.push(pj);
  //setFav.add(pj)
  //myFavorites = Array.from(setFav)
  console.log(myFavorites)  
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
  //myFavorites = Array.from(setFav)
  return res.status(200).json(myFavorites)
}
module.exports = {
  postFav,
  deleteFav,
  getFav
};
