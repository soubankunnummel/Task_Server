
import mongoose, { Schema } from 'mongoose'

const userSchem = new Schema({
    name:{type:String, required:true},
    email:{type:String, required:true,},
    password:{type:String, required:true},
})

const userModel = mongoose.model('User',userSchem)
export default userModel