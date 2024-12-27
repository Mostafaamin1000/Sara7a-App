import { Router } from "express"
import { logout, sendMSG, user } from "./user.controller.js"
let userRouter =Router()

userRouter.get('/user/:id',user)
userRouter.post('/sendMSG/:id',sendMSG)
userRouter.get('/logout',logout)


export default userRouter