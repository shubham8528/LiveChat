import genToken from "../config/token.js"
import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
export const signUp = async (req, res) => {
    try {
        const { userName, email, password } = req?.body
        const checkUserByUserName = await User.findOne({ userName })
        if (checkUserByUserName) {
            return res.status(400).json({ message: "userName already exist" })
        }
        const checkUserByUserEmail = await User.findOne({ email })
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
        const token = await genToken(user._id)
        res.cookie("token", token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000, sameSite: "None", secure: false })
        return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json({ message: `signup error: ${error}` })
    }
}


export const signIn = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "user does't exist" })
        }
        const isPassword = await User.findOne(password)
        const isMatch = await bcrypt.compare(isPassword, user?.password)
        if (!isMatch) {
            return res.status(400).json({ message: "incorrect password" })
        }
        const token = await genToken(user._id)
        res.cookie("token", token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000, sameSite: "None", secure: false })
        return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json({ message: `signIn error: ${error}` })
    }
}

export const signOut = async (req, res) => {
    try {
        res.clearCookie('token')
        return res.status(200).json({ message: "signOut sucessfully" })
    } catch (error) {
        return res.status(500).json({ message: `signOut error: ${error}` })
    }
}