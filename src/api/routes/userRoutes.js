const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.status(res.statusCode).send('user routes')
})

module.exports = router