import express from 'express'
import { generateDemo, getCurrentUser } from '../controllers/user.controller.js'
import isAuth from '../middlewares/isAuth.js'

const userRouter = express.Router()

userRouter.get('/me', isAuth, getCurrentUser)
userRouter.get('/gen', generateDemo)


export default userRouter
