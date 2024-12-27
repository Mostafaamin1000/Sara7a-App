import { Router } from "express"
import { homePage } from "./home.controller.js"
let homeRouter =Router()

homeRouter.get('/' ,homePage)


export default homeRouter