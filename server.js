const express = require('express')

const server = express()

server.use(express.json())

const { projectsRouter, resourcesRouter, tasksRouter} = require('./routes')

server.use('/projects', projectsRouter)
server.use('/resources',resourcesRouter)
server.use('/tasks', tasksRouter)

server.use((err, req, res, next)=>{
    res.status(err.httpStatusCode || 500).json({
        message: err.message
    })
})

module.exports = server