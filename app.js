import express from 'express'
import homeRouter from './src/modules/home/home.router.js'
import {DBConn} from './DB/db.conection.js'
import loginRouter from './src/modules/login/login.router.js'
import registerRouter from './src/modules/register/register.router.js'
import messagesRouter from './src/modules/messages/messages.router.js'
import userRouter from './src/modules/user/user.router.js'
import session from 'express-session'
import mongoSession from 'connect-mongodb-session'
import cors from 'cors'
let MongoDBSore = mongoSession(session)
const app = express() 
const port = process.env.PORT || 3000 
let store = new MongoDBStore({
    uri: 'mongodb://127.0.0.1:27017/sara7a',
    collection: 'mySessions'
  })
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store
  }))
app.use(cors())  
app.use(express.urlencoded({extended:true}))
app.use('/public',express.static('public'))
app.use(homeRouter)
app.use('/',loginRouter)
app.use('/',registerRouter)
app.use('/',messagesRouter)
app.use('/',userRouter)

app.listen(port,()=>{
    console.log("Server Is Running on port " + port);
    
}) 