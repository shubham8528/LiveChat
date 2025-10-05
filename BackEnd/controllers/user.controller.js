import User from '../models/user.model.js'

export const getCurrentUser = async (req, res) => {
    try {
        let userId = req.userId
        // find the user via userId and get all value accept selecte key//
        let user = await User.findById(userId).select("-password")
        if (!user) {
            res.status(400).json({ message: "user not found" })
        }
        return res.status(200).json()
    } catch {
        return res.status(500).json({ messsage: `current user error ${error}` })
    }
}
