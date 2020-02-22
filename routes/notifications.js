const express = require('express')
const router = express.Router()

const { getNotifications } = require('../services')
const cache = require('../notificationsCache')

router.get('/', (req, res, next) => {
    console.log('index invoked')
    try {
        res.status(200).set({
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
        });
        res.write('\n');

        getNotifications(req, res, cache);
    } catch (e) {
        console.log(e)
    }
})


module.exports = router