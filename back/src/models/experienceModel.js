import mongoose from 'mongoose'
import { RESOURCE } from '../config/constants.js'

const experienceSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Title field is required']
        },
        description: String,
        startDate: {
            type: Date,
            required: [true, 'InitialDate field is required']
        },
        finishDate: Date,
        type: { 
            type: String, 
            enum: {
                values: ['work', 'education', 'personal proyect'],
                message: `{VALUE} is not a valid type experience`
            },
            required: [true, 'Experience type field is requierd']
        },
        active: { 
            type: Boolean, 
            default: true
        }
    }
)

const Experience = new mongoose.model(RESOURCE.EXP, experienceSchema)
export default Experience