const express = require('express')
const router = express.Router()

const { getNotifications } = require('../services')
const cache = require('../notificationsCache')

router.get('/', (req, res, next) => {
    console.log('index invoked')
    try {
        res.status(200).set({
            'Content-Type': 'text/event-stream', // Specific sse type for browser
            'Cache-Control': 'no-cache', // Helps to have fresh data
            'Connection': 'keep-alive', // Need to keep connection open
        });

        getNotifications(req, res, cache); // The important service
    } catch (e) {
        console.log(e)
    }
})


module.exports = router