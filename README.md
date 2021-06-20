# Live stream third party API (OpenTok) using Nodejs and Docker

> Basic understanding of OpenTok and Docker for self learning

---

### OpenTok
- Create opentok session
- How to join session
- Create live stream HLS url
- Broadcast session
- Destroy broadcast
- covered (HLS and .....)

---

## Description

You can use the OpenTok Node.js library to generate OpenTok sessions. Each session has a unique session ID, which you can use in an OpenTok client library to connect to an OpenTok session. (See "Joining a Session" for Web, iOS, or Android.)

## Docker basic command

# create image file

- sudo docker build -t fileName .

# Run image file

- docker run -it -p newPort:oldPort (example : 9000 : 3000) fileName