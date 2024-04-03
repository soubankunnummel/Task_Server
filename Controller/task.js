import TaskModel from "../Model/taskModel.js";
import userModel from "../Model/userModel.js";

export const AddTask = async (req, res) => {
  try {
    const { task } = req.body;
    if (!task) {
      res.status(400).json("pleas fill all the filds");
    }

    const newTask = new TaskModel({
      title: task,
    });

    const saveTask = await newTask.save();
    const userUpdate = await userModel.findOneAndUpdate(
      { email: req.user },
      { $push: { task: saveTask._id } }
    );
    console.log(userUpdate)
    if (saveTask && userUpdate) {
      res.status(201).json(saveTask);
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server Err" });
    console.log(error);
  }
};

// get all tasks

export const getTask = async (req, res) => {
  try {
    const task = await userModel.findOne({email:req.user}).populate( 'task' ) ;
    console.log(task)
    if (!task) {
      return res.status(404).json("no data found");
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Internal server Err" });

    console.log(error);
  }
};

//delete task

export const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await TaskModel.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json("No such task exists!");
    } else {
      res.status(200).json("Deleted Successfully");
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server Err" });

    console.log(error);
  }
};

// set complted ,

export const setComplet = async (req, res) => {
  try {
    const id = req.params.id;
    const updatetask = await TaskModel.findById(id);
    if (!updatetask) {
      return res.status(404).json({ erroe: "no task found" });
    } else {
      updatetask.status = true;
      res.status(201).json(await updatetask.save());
      //res.send(`/tasks/${updatetask._id}`)
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server Err" });

    console.log(error);
  }
};
