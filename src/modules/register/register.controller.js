import { User } from "../../../DB/models/user.schema.js"



const Register = (req,res)=>{
    res.render('register.ejs',{error:req.query.error , session:null})
}

const handleRegister = async(req,res)=>{
    let isuser =await User.findOne({email:req.body.email})
    if(isuser) return res.redirect('/register?error= Email Already exist')
    await User.insertMany(req.body)
    res.redirect('/login')
}

export {
    handleRegister, Register
}
