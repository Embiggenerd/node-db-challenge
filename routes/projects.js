const express = require('express')
const router = express.Router()

const { getProjects } = require('../services')

router.get('/', async (req, res, next) => {
    try {
        const projects = await getProjects()
        console.log('projecsInRouter', projects)
        res.json(projects)
    } catch(e){
        console.log(e)
        next(e)
    }
})

module.exports = router