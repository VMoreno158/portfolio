import mongoose from 'mongoose';
import { RESOURCE } from '../config/constants.js';

const proyectSchema = new mongoose.Schema(
    {
        name: { 
            type: String, 
            required: [true, 'Name field is required']
        },
        image: String,
        description: { 
            type: String, 
            required: [true, 'Description field is required'] 
        },
        technologies: {
            type: [String],
            validate: {
                validator: arr => arr.length > 0,
                message: 'At least one technology is required'
            }
        },
        webUrl: String,
        videoUrl: String,
        repoUrl: { 
            type: String, 
            required: [true, 'Repository field is required'] 
        },
        weight: {
            type: Number,
            validate: {
                validator: num => num >= 0 && num <= 100,
                message: 'Weight must be a number between 0 and 100'
            },
            required: [true, 'Proyect weight must be asigned']
        }
    }
)

const Proyect = new mongoose.model(RESOURCE.PROYECT, proyectSchema)
export default Proyect