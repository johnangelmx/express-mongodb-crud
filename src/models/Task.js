import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    title: {
        type: String,
        required: true, //El campo debe ser obligatorio
        unique: true, //El campo no se duplica
        trim: true // El campo esta limpio de espacios
    },
    description: {
        type: String,
        required: true //El campo debe ser obligatorio
    },
    done: {
        type: Boolean,
        default: false //El campo por defecto 
    },
},
    {
        timestamps: true,
        versionKey: false
    })

export default model('Task', taskSchema)