const express = require('express');
const router = express.Router();
const { Genre } = require('../db.js');
const axios = require ('axios');

router.get('/genre', async(req, res) => {
    try{
    let genre = await axios.get('https://api.rawg.io/api/genres?key=731a52844e584332afddedad200f4ebe');
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

    const dbGenre = await Genre.findAll();

    res.send(dbGenre);
    }catch (error) {
        console.log(error);
    }
    
})

module.exports = router