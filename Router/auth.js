import express from 'express'
import { UserRegister, Usrlogin } from '../Controller/auth.js'
const Router = express.Router()

Router.post('/reginster', UserRegister)
Router.post('/login',Usrlogin)

export default Router