const express = require('express');
const router = express.Router();
const { Videogame, Genre } = require('../db.js');
const axios = require ('axios');
const { Op } = require('sequelize');

const info = async ()=> {
    try{
    
    /* let gamesShowed = await axios.get('https://api.rawg.io/api/games?key=731a52844e584332afddedad200f4ebe') */

    let gamesShowed1 = await axios.get('https://api.rawg.io/api/games?key=731a52844e584332afddedad200f4ebe&page_size=40&page=1')
    let gamesShowed2 = await axios.get('https://api.rawg.io/api/games?key=731a52844e584332afddedad200f4ebe&page_size=40&page=2')
    let gamesShowed3 = await axios.get('https://api.rawg.io/api/games?key=731a52844e584332afddedad200f4ebe&page_size=20&page=3')
    let gamesShowed = gamesShowed1.data.results.concat(gamesShowed2.data.results.concat(gamesShowed3.data.results))
   
/*   let date = await Promise.all([gamesShowed]); 

    gamesShowed = date.data.results; */  
    
    let game = gamesShowed;
    
    game = game.map((result) => {
        return {
            id: result.id,
            name: result.name,
            description: result.description,
            released: result.released,
            image: result.background_image,
            rating: result.rating,
            platforms: result.platforms.map(e => e.platform.name),
            genres: result.genres.map(e => e.name),
        }        
    });
    let games = []; 

    for(let i = 0; i < 100; i++){
        games.push(game[i]);

    }
    return games;
    } catch (error){
        console.log(error);
    }

};

const infoDB = async () => {
    const db = await Videogame.findAll({
        include:{
            model: Genre,
            attributes: ['name'],
            through:{
                attributes: []
            }
        } 
    });
    return db;
};

const apiInfoByName = async (name) => {
    let infoName = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=731a52844e584332afddedad200f4ebe`);
    infoName = infoName.data.results;
    

    let mapInfo = infoName.map(i => {
        return {
            id: i.id,
            name: i.name,
            description: i.description,
            released: i.released,
            image: i.background_image,
            rating: i.rating,
            platforms: i.platforms.map(e => e.platform.name),
            genres: i.genres.map(e => e.name),
        }
    });

    let games = []

    for(let i = 0; i < 15; i++){
        games.push(mapInfo[i]);

    }
    return games;
}
const apiInfoByid = async (id) => {
    let infoId = await axios.get(`https://api.rawg.io/api/games/${id}?key=731a52844e584332afddedad200f4ebe`);
    let infoIds = infoId.data;

    
        return {
            id: infoIds.id,
            name: infoIds.name,
            description: infoIds.description,
            released: infoIds.released,
            image: infoIds.background_image,
            rating: infoIds.rating,
            platforms: infoIds.platforms.map(e => e.platform.name),
            genres: infoIds.genres.map(e => e.name),
        }
        
}


router.get('/database', async (req, res) => {
    try {
        const dbVideogame = await infoDB();
        res.send(dbVideogame);
    } catch (error) {
        res.status(400).send(error);
    }
        
})


router.get('/', async (req, res) => {
    const apiVideogame = await info();

    const dbVideogame = await infoDB();

    res.send(dbVideogame.concat(apiVideogame));

    
});

router.get('/videogames', async (req, res) => {
    const name = req.query.name;
    
    if(name) {
        try {
        const apiGames = await apiInfoByName(name);
        const dbGames = await Videogame.findAll({
                where: {
                    name: {
                        [Op.iLike]: '%' + name + '%'
                    }
                },
                include: [{
                    model:  Genre
                }]
                
            });
            const totalGames = dbGames.concat(apiGames)
            return res.json(totalGames);
        } catch (error) {
            console.log(error)
        }
    } 
});

router.get('/videogame/:id', async (req, res) => {
    const id = req.params.id;
    try{
        const dbGames = await Videogame.findByPk(id,{
                
                include: {
                    model:  Genre,
                    /* as: "genres", */
                    attributes: ['name'], 
                   /*  raw: true,
                    nest: true, */
                through:{
                attributes: []
            }
                }
                
            });
            if(dbGames){
                res.json(dbGames)
            }
            
        }catch(error){
            try {
                apiGames = await apiInfoByid(id);
                res.json(apiGames)
                
                /* const totalGames = dbGames.concat(apiGames)
                res.json(totalGames); */
        } catch (error) {
            console.log(error)
        }}
     
})

router.post('/create', async(req, res) => {
    const { name, description, released, rating, platforms, image, genre } = req.body;
    try{
        let genreDB = await Genre.findAll({
            where: { name: genre },
        });

            if(name && description && platforms) {
            let dbGameCreate = await Videogame.create({
                name,
                description,
                released,
                rating,
                platforms,
                image
            })

            dbGameCreate.addGenre(genreDB);
            return res.send('Your game has been succesfully created');
           // }
        }}catch(error) {
        res.status(400).send({message:'Error'})
        console.log(error)
    }
});

module.exports = router