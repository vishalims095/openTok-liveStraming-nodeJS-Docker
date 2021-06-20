const express = require('express')
const router = express.Router()
const liveStreamController = require('./liveStreamController')
router.get('/', liveStreamController.checkApi)
router.post('/createSession', liveStreamController.createSession)
router.post('/startBroadcast', liveStreamController.startBroadcast)
router.post('/addParticipants', liveStreamController.addParticipants)
router.post('/stopBroadcast', liveStreamController.stopBroadcast)
module.exports = router
