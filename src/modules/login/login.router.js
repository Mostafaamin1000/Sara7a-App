import { Router } from "express"
import {handleLogin, Login } from "./login.controller.js"
let loginRouter =Router()

loginRouter.get('/login',Login)
loginRouter.post('/handleLogin',handleLogin)

export default loginRouter