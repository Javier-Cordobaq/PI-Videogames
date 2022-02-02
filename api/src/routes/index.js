const { Router } = require('express');
const { Videogame, Gender, VideogameGender } = require('../db.js')
const { Op } = require('sequelize')
const axios = require('axios')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
/* 731a52844e584332afddedad200f4ebe */

const info = async ()=> {
    try{
    
    let gamesShowed = axios.get('https://api.rawg.io/api/games?key=6189995fbc584dedb6d4c7d34a1c5238')
   
    let date = await Promise.all([gamesShowed]);

    gamesShowed = date[0].data.results;
    
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
            genre: result.genres.map(e => e.name),
        }        
    });
    let games = []; 

    for(let i = 0; i < 2; i++){
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

const apiInfoByName = async () => {
    let infoName = await axios.get(`https://api.rawg.io/api/games?search={game}&key=6189995fbc584dedb6d4c7d34a1c5238`);
    infoName = infoName.data.results;

    let mapInfo = infoName.map(i => {
        return {
            name: i.name
        }
    });
    res.send(mapInfo);
};

/* const dbInfoByName = async () => {
    const db = await Videogame.findAll({
        where: {
            name: 
        }
    })
} */


router.get('/database', async (req, res) => {
    try {
        const dbVideogame = await infoDB();
        res.send(dbVideogame);
    } catch (error) {
        res.status(400).send('not found', error);
    }
        
})


router.get('/', async (req, res) => {
    const apiVideogame = await info();

    const dbVideogame = await infoDB();

    res.send(dbVideogame.concat(apiVideogame));

    
});

router.get('/', async (req, res) => {
    const name = req.query.name;
    const apiGames = await apiInfoByName();
    if(name) {
        try {
            await Videogame.findAll({
                where: {
                    name: {
                        [Op.iLike]: '%' + name + '%'
                    }
                },
                include: [{
                    model:  Genre
                }]
                
            });
            return res.json(apiGames);
        } catch (error) {
            console.log(error)
        }
    } 
})

router.post('/', async(req, res) => {
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

router.get('/genre', async(req, res) => {
    try{
    let genre = await axios.get('https://api.rawg.io/api/genres?key=6189995fbc584dedb6d4c7d34a1c5238');
    genre = genre.data.results;
    
    let mapGenre = genre.map(g => {
        return {
            id: g.id,
            name: g.name
        }
    });

    
    mapGenre.forEach(element => {
        Genre.findOrCreate({
            where: {
                id: element.id,
                name: element.name
            }
        })
    });

    res.send(mapGenre);
    }catch (error) {
        console.log(error);
    }
    
})


module.exports = router;
