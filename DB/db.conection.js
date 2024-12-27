import mongoose from "mongoose";
export const DBConn=mongoose.connect('mongodb://127.0.0.1:27017/sara7a')
.then(()=>(console.log("DB connected successfully"))).catch(()=>(console.log('Erorr in Db Connection'))) 