import mongoose, { mongo } from "mongoose";

const WTFSchema = mongoose.Schema({
    text : String
})

export const WTFModel = mongoose.model('WTF',WTFSchema)