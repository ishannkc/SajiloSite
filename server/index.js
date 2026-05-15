import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDb from './config/db.js'
import authRouter from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const port = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use('/api/auth', authRouter)

const startServer = async () => {
    try {
        await connectDb()
        app.listen(port,()=>{
            console.log('Server started')
        })
    } catch (error) {
        console.error('Failed to start server')
        process.exit(1)
    }
}

startServer()