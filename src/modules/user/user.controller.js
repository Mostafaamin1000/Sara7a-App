import { Message } from "../../../DB/models/message.schema.js"



const user = (req,res)=>{
    res.render('user.ejs',{userId :req.params.id , session:req.session})
}

const sendMSG = async(req,res)=>{
    req.body.user = req.params.id
await Message.insertMany(req.body)
res.redirect('/user/'+ req.params.id)
}

const logout = (req,res)=>{
    req.session.destroy(function(err) {
        res.redirect('/login')
      })
}

export{
    user,
    sendMSG,
    logout
}