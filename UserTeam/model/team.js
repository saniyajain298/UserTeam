import mongoose from "mongoose";


const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',  
        required: true,
    }],

}, {
    timestamps: true
})

export const Team = mongoose.model('team', teamSchema)