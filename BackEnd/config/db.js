import mongoose from "mongoose";
export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("connect")
    } catch (err) {
        console.log("DB error:", err)
    }
}