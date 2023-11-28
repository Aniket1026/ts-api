import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: [6,"Too short name"],
        max: 32,
        unique: true
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 32
    },
    password: {
        type: String,
        required: true,
        min: [6,"Too short password"],
        max: 32
    },
    role: {
        type: String,
        enum: ["user","admin"],
        default: "user"
    }
}, { timestamps: true });

export const User = mongoose.model("User", userSchema)