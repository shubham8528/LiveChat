import express from "express"
import getCurrentUser from "../controllers/user.controller"
import isAuth from "../middleware/isAuth"

const authRouter = express.Router()

authRouter.post("/current", isAuth, getCurrentUser)


export default authRouter