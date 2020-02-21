const express = require('express')
const router = express.Router()

const { getResources } = require('../services')

router.get('/', async (req, res, next) => {
    try {
        const resources = await getResources()
        console.log('resourcesInRouter', resources)
        res.json(resources)
    } catch(e){
        console.log(e)
        next(e)
    }
})

// router.post('/', async (req, res, next) => {
//     try {
//         const project = await postProject(req.body)
//         console.log('projectInRouter', project)
//         res.json(project)
//     } catch(e){
//         console.log(e)
//         next(e)
//     }
// })

module.exports = router