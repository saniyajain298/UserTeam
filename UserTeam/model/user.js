import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true
    },
    domain: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    },

}, {
    timestamps: true
})

export const User = mongoose.model('user', userSchema)