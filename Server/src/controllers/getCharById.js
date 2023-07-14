const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

async function getCharacterId(req, res) {
  try {
    const { id } = req.params;
    const response = await axios.get(URL + id)
    const {name, gender, species, origin, image, status} = response.data
    const character = {
      id: Number(id),
      name,
      gender,
      species,
      origin,
      image,
      status,
    };
    res.status(200).json(character)
  } catch (error) {
    res.status(404).json({error: error.message})
  }
 /*  axios
    .get(URL + id)
    .then((response) => response.data)
    .then(({ name, status, species, origin, image, gender }) => {
      if (name) {
        const personaje = {
          name,
          status,
          species,
          origin,
          image,
          gender,
        };
        return res.json(personaje);
      }
      return res.status(404).json({ error: "Not found." });
    })
    .catch((error) => res.status(500).send("error.message")); */
}

module.exports ={
   getCharacterId
  };
