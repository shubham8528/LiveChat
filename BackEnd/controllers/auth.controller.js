import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
export const signUp = async (req, res) => {
    try {
        const { userName, email, password } = req.body
        const checkUserByUserName = await User.findOne(userName)
        if (checkUserByUserName) {
            return res.status(400).json({ message: "userName already exist" })
        }
        const checkUserByUserEmail = await User.findOne(email)
        if (checkUserByUserEmail) {
            return res.status(400).json({ message: "email already exist" })
        }
        if (password.length > 6) {
            return res.status(400).json({ message: "password must be at 6 characters" })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            userName, email, password: hashedPassword
        })

    } catch (error) {

    }
}