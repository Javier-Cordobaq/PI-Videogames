const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const videogames = require('./videogames.js'); 
const genre = require('./genre.js'); 

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use( '/', videogames )
router.use( '/', genre )

module.exports = router;