import express from "express"
import dotenv from "dotenv"
import authRouter from "./routes/auth.routes.js"
import { connectDb } from "./config/DB.js"
import cors from "cors"
import userController from "./routes/user.routes.js"
import cookieParser from "cookie-parser"
dotenv.config()

const port = process.env.PORT || 5000
const app = express()
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())
app.get("/", (req, res) => {
    res.send('hello')
})
app.use("/api/auth", authRouter)
app.use("/api/user", userController)

app.listen(port, () => {
    connectDb()
    console.log('server started PORT', port)
})