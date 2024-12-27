import { User } from "../../../DB/models/user.schema.js"



const Login = (req,res)=>{
    res.render('login.ejs',{error:req.query.error , session:null})
}

const handleLogin =async(req,res)=>{
    let user = await User.findOne({email:req.body.email})
    if(!user || user.password !== req.body.password) return res.redirect('/login?error= Incorrect Email or Password')

        req.session.isLoggedin = true 
        req.session.name = user.name
        req.session.userId = user._id 
        res.redirect('/message')
}

export {
    handleLogin,
     Login
}
