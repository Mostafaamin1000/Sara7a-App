import mongoose, { Schema, model } from "mongoose";

const schema=new Schema({
    message:String,
    user:{type:mongoose.Types.ObjectId, 
        ref:"User"
    }
})

export const Message=model('Message',schema)