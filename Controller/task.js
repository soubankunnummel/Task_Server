import TaskModel from "../Model/taskModel.js";


export const AddTask = async (req, res) => {
    try {
        const {task} = req.body
        console.log(req.body)
       if(!task){
        res.status(400).json('pleas fill all the filds')
       }
        
        const newTask = new TaskModel({
            title:task
           
        })
        const saveTask = await newTask.save()
        res.status(201).json(saveTask)
    } catch (error) {
        console.log(error)
    }
}

// get all tasks

export const getTask = async (req, res) => {
    try {
        const  task = await TaskModel.find();
        if(!task){
            return res.status(404).json( 'no data found');
        }

        res.status(200).json(task);
    } catch (error) {
        console.log(error)
    }
}

//delete task

export const deleteTask = async (req, res) => {
    try {
        const id = req.params.id
        const result = await TaskModel.findByIdAndDelete(id)
        if (!result){
            return res.status(404).json('No such task exists!')
            
        } else{
            res.status(200).json("Deleted Successfully")
        }

        


    } catch (error) {
        console.log(error)
    }
}

// set complted , 

export const setComplet = async (req, res) => {
    try {
        const id = req.params.id
        const  updatetask = await TaskModel.findById(id)
        if(!updatetask){
            return res.status(404).json({erroe:"no task found"})
        }else {
         updatetask.status = true
        res.status(201).json(await updatetask.save())
        //res.send(`/tasks/${updatetask._id}`)
        

        }
    } catch (error) {
        console.log(error)
    }
}