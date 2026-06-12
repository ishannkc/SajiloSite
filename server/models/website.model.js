import mongoose from "mongoose";
import { randomUUID } from "crypto";

//conversation history
const messageSchema = new mongoose.Schema({
    role: {
        type:String,
        enum: ['ai', 'user'],
        required: true
    },
    content: {
        type:String,
        required: true
    }
},{timestamps: true} )

const websiteSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        default: "Untitled Website"
    },
    latestCode: {
        type:String,
        required: true
    },
    conversation:[
        messageSchema
    ],
    deployed: {
        type:Boolean,
        default: false
    },
    deployedUrl: {
        type: String,
    },
    //uniquely identify generated websites(each generated website has a unique id attached to it)
    slug: {
        type:String,
        unique: true,
        default: () => randomUUID()
    }
},{timestamps: true})

const Website = mongoose.model('Website', websiteSchema)
export default Website