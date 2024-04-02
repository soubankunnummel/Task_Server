import mongoose, { Schema } from 'mongoose'

const taskSchema = new Schema({
    title: { type: String, required:true},
    status:{type:Boolean,default:false}
})

const  TaskModel = mongoose.model("Task",taskSchema)
export default TaskModel