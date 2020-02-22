const express = require('express')
const router = express.Router()

const { getTasks, postTask } = require('../services')

router.get('/', async (req, res, next) => {
    try {
        const tasks = await getTasks()

        res.json(tasks)
    } catch (e) {
        next(e)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const task = await postTask(req.body)
        return res.json(task)
    } catch (e) {
        next(e)
    }
})
module.exports = router