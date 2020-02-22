const express = require('express')
const router = express.Router()

const { getProjects, postProject } = require('../services')

router.get('/', async (req, res, next) => {
    try {
        const projects = await getProjects()
        console.log('projectsInRouter', projects)
        res.json(projects)
    } catch(e){
        console.log(e)
        next(e)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const project = await postProject(req.body)
        console.log('projectInRouter', project)
        res.json(project)
    } catch(e){
        console.log(e)
        next(e)
    }
})

module.exports = router