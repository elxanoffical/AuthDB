import mongoose from "mongoose";


const userSchema =  new mongoose.Schema({
    fullname: {type: String, required: true},
    userName: {type: String, required: true, unique:true},
    password: {type: String, required: true},
})

export  default mongoose.models.User || mongoose.model('User', userSchema)