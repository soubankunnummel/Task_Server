import userModel from "../Model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const UserRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json("pleas fill  all fields");
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.log(error);
  }
};

// ;login user

export const Usrlogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Pleas fill all filds" });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json("Invalid Email ");
    }

    const compairePassword = await bcrypt.compare(password, user?.password);
    if (!compairePassword) {
      return res.status(404).json({ error: "Incorrect Password" });
    } else {
      const token = jwt.sign({ email }, process.env.USER_SECREAT, {
        expiresIn: "24h",
      });
      res.status(200).json({ token: token, user: user });
    }
  } catch (error) {
    console.log(error);
  }
};
