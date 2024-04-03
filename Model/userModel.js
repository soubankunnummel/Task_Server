
import mongoose, { Schema } from 'mongoose'

const userSchem = new Schema({
    name:{type:String, required:true},
    email:{type:String, required:true,},
    password:{type:String, required:true},
    task:[{type:mongoose.Schema.Types.ObjectId, ref:'Task'}],
})

const userModel = mongoose.model('User',userSchem)
export default userModel