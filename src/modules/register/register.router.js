import { Router } from "express"
import { handleRegister, Register } from "./register.controller.js"
let registerRouter =Router()
registerRouter.get('/register',Register)
registerRouter.post('/handleRegister',handleRegister)

export default registerRouter