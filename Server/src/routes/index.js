const {postFav, deleteFav, getFav} = require("../controllers/handleFavorites")
const {login, getStatus, logOut} = require("../controllers/login")
const {getCharacterId} = require("../controllers/getCharById")
const { getPage } = require("../controllers/characters")
const router = require("express").Router()




router.get('/character/:id',(req, res) => {
    getCharacterId(req,res)
});


router.get('/login', (req,res) => {
    if (Object.keys(req.query).length > 0) {
        login(req, res);
      } else {
        getStatus(req, res);
      }
});

router.get("/logout", logOut)

router.post('/fav', postFav);

router.get("/fav", getFav)

router.delete('/fav/:id', deleteFav)

router.get('/page/:num', getPage)



module.exports = router
