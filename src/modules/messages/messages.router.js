import { Router } from "express"
import { messages } from "./messages.controller.js"
let messagesRouter =Router()

messagesRouter.get('/message',messages)


export default messagesRouter