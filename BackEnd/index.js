import express from "express"
import dotenv from "dotenv"
import authRouter from "./routes/auth.routes.js"
import { connectDb } from "./config/DB.js"

dotenv.config()

const port = process.env.PORT || 5000
console.log(process.env.PORT)
const app = express()
app.get("/", (req, res) => {
    res.send('hello')
})
app.use("api/auth", authRouter)

app.listen(port, () => {
    connectDb()
    console.log('server started')
})