# Live stream third party API (OpenTok) using Nodejs and Docker

> Basic understanding of OpenTok and Docker for self learning

---

### OpenTok
- Create opentok session
- How to join session
- Create live stream HLS url
- Broadcast session
- Destroy broadcast
- Covered (HLS and WebRTC)

---

## Description

You can use the OpenTok Node.js library to generate OpenTok sessions. Each session has a unique session ID, which you can use in an OpenTok client library to connect to an OpenTok session. (See "Joining a Session" for Web, iOS, or Android.)

## Docker basic command

# Create image file

- sudo docker build -t imageName .

# Run image file

- docker run -it -p newPort:oldPort (example : 9000 : 3000) imageName

# Run docker container in backend

- docker run -d -p 9000:3000 imageName

# List of running container

- docker ps

# Optimize docker build command like nodemon or volume
 - In nodejs we use "nodemon index.js" (continuous watch our file)
 - If nodemon not installed, install it and create again same imageFile
 - docker run -it -p 9001:3000 -v $(pwd):/index node-docker // assign Different PORT
