const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
const g4s2 = require('./routes/g4s2');;

router.use(g4s2);

module.exports = router
