const express = require('express')
const router = express.Router()

const { getTasks } = require('../services')

router.get('/', async (req, res, next) => {
    try {
        const tasks = await getTasks()

        res.json(tasks)
    } catch (e) {
        next(e)
    }
})

module.exports = router