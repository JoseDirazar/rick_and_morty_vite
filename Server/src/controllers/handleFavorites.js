const {User, Favorite} = require("../DB_connection")



async function postFav(req, res) {
  try {
    
  const { id, status, name, species, origin, image, gender } = req.body;
  
  const character = {
    id,
    status,
    name,
    species,
    origin: origin?.name,
    image,
    gender,
  };

  await Favorite.create(character)
  const favorites = await Favorite.findAll()
  
  return res.status(200).json(favorites);

  } catch (error) {
    res.status(512).json({error: error})
  }
}

async function deleteFav(req, res) {
 try {
  const { id } = req.params;
  const char = Favorite.findByPk(id)
  if(char){
    await Favorite.destroy({
      where: {
        id,
      }
    })
    const favorites = Favorite.findAll()
    return res.status(200).json(favorites)
  } else {
    return res.status(404).json({error: "El personaje ya ah sido eliminado."})
  }
 } catch (error) {
  res.status(405).json({error: error})
 }
  
}
async function getFav(req,res) {
  try {
    const favorites = await Favorite.findAll()
  return res.status(200).json(favorites)
  } catch (error) {
    res.status(404).json({error: error})
  }
}
module.exports = {
  postFav,
  deleteFav,
  getFav
};
