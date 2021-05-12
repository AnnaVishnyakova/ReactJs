const cors = require("cors")
const express = require("express")

const server = express()

server.use(cors())



const chats = [
    { title: "room1" },
    { title: "test-room2"},
    { title: "room3"},
  ]
  
const messages = {
    chat1: [
      { author: "me", text: "test!",  },
      { author: "Bot", text: "Привет, я бот!",  },
    ],
    chat3: [
      { author: "me", text: "test!", },
      { author: "Bot", text: "Привет, я бот!",  },
    ],
}


const getChats = (request, response) => {
    response.status(200).send(chats)
  }
  
  const getMessagesById = (request, response) => {
    const { id } = request.params
  
    response.status(200).send(messages[id] || [])
  }
  server.get("/chats", getChats)
  server.get("/messages/:id", getMessagesById)

server.listen("8000", () => console.log("port 8080"))