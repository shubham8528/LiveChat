import express from "express"
import { getCurrentUser } from "../controllers/user.controller.js"
import isAuth from "../middleware/isAuth.js"

const authRouter = express.Router()

authRouter.get("/current", isAuth, getCurrentUser)


export default authRouter