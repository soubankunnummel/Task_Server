import express from 'express'
import { UserRegister } from '../Controller/auth.js'
const Router = express.Router()

Router.post('/reginster', UserRegister)

export default Router