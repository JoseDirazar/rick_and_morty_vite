const {postFav, deleteFav, getFav} = require("../controllers/handleFavorites")
const {login} = require("../controllers/login")
const {getCharacterId} = require("../controllers/getCharById")
const { getPage } = require("../controllers/characters")
const router = require("express").Router()




router.get('/character/:id',(req, res) => {
    getCharacterId(req,res)
});


router.get('/login', (req,res) => {
    login(req,res)
});


router.post('/fav', (req,res) => {
    postFav(req,res)
});

router.get("/fav", getFav)
router.get('/page/:num', getPage)


router.delete('/fav/:id', deleteFav); // es lo misomo!!!!!

module.exports = router
