import userModel from "../Model/userModel.js"
import bcrypt from 'bcrypt'

export const UserRegister  = async (req, res) => {
    try {
        const {name, email, password} = req.body
        if(!name || !email || !password ){
           return  res.status(400).json('pleas fill  all fields')
        }
        const hashedPassword = await bcrypt.hash(password,10) 

        const newUser = new userModel({
            name,
            email,
            password :hashedPassword
        })
        

        const savedUser = await newUser.save()
        res.status(201).json(savedUser)

    } catch (error) {
        console.log(error)
    }
}


// ;login user 

