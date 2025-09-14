import React from 'react'
import User from '../models/user.model'

export default getCurrentUser = async (req, res) => {
    try {
        let userId = req.userId
        // find the user via userId and get all value accept selecte key//
        let user = await User.findById(userId).select("-password")
    } catch {

    }
}
