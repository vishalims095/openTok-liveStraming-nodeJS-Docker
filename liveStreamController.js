const OpenTok = require("opentok");
require('dotenv').config()
const opentok = new OpenTok(`${process.env.apiKey}`, `${process.env.apiSecret}`); //you will get from openTok project setting

// At first we create session

exports.checkApi = (req, res) =>{
    res.status(200).send({message : "Hello Working fine"})
}

exports.createSession = (req, res) => {
    try {
        let token = opentok.createSession({mediaMode:"routed"},async function (err, session) {
            //{mediaMode:"routed"} when you want to broadcast otherwise remove it
            if (err) throw new Error(err);
                console.log("=========> Session <==============",session.sessionId) // here we got sessionId
                token = opentok.generateToken(session.sessionId);
                token = session.generateToken();
                token = session.generateToken({
                role : 'publisher', // select publisher because you want to broadcast vedio
                expireTime : new Date().getTime() / 1000 + 3600, // one hour
                data : 'name=Vishal',
                initialLayoutClassList : ['focus']
            });
            return res.status(200).json({ "message" :"Session successfully created" , "data" : {sessionId : session.sessionId} }) // save this session id in db
        })
    } catch(error){
        return res.status(403).json({ "message" : error.message })
    }
}

exports.startBroadcast = (req, res) =>{
    try {
        let {sessionId} = req.body
        var broadcastOptions = {
            maxDuration: Number(req.param('maxDuration')) || 600,
            resolution: req.param('resolution') || '1280x720',
            layout: {type : 'bestFit'},
            outputs: {
              hls: {}
            }
          };
          opentok.startBroadcast(req.body.sessionId, broadcastOptions, async function (err, broadcast) {
            if (err) {
                console.log("error comming", err)
                return res.status(404).json({"message": 'Not found. No clients are actively connected to the OpenTok session.'})
            }
            return res.status(200).json({ "message" :"Session Id and Token" , "data" : {broadCast : broadcast} }) // it will return broadcast url
        })
    } catch(error){
        return res.status(403).json({ "message" : error.message })
    }
}

exports.addParticipants = (req, res) =>{
    try {
        let {sessionId} = req.body
        var token = opentok.generateToken(sessionId, { role: 'subscriber' });
        return res.status(200).json({ "message" :"Session Id and Token" , "data" : {token : token} })
    } catch(error){
        return res.status(500).json({"message":error.message})
    }
}

exports.stopBroadcast = (req, res) =>{
    try {
        let {broadcastId} = req.body
        opentok.stopBroadcast(broadcastId,async function (error, broadcast) {
            if (error) {
                // throw new Error(error)
                console.log("============> error comming",error)
                return res.status(404).json({"message": "Unable to stop broadcast"})
            }else{
                return res.status(200).json({"message": "Event closed successflly.", status: 200 , "data": {}})
            }
          });
    }catch(error){
        return res.status(500).json({"message":error.message})
    }
}