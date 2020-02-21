const express = require('express')
const router = express.Router()

const { getResources, postResource } = require('../services')

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

router.post('/', async (req, res, next) => {
    try {
        const resource = await postResource(req.body)
        console.log('resourceInRouter', resource)
        res.json(resource)
    } catch(e){
        console.log(e)
        next(e)
    }
})

module.exports = router