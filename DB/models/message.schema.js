import mongoose,{Schema,model} from "mongoose";
import { type } from "os";

const schema=new Schema({
    message:String,
    user:{type:mongoose.Types.ObjectId,
        ref:"User"
    }
})

export const Message=model('Message',schema)