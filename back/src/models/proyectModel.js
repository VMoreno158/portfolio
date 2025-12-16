import mongoose from 'mongoose';
import { RESOURCE } from '../config/constants.js';

const proyectSchema = new mongoose.Schema(
    {
        name: { 
            type: String, 
            required: [true, 'Name field is required']
        },
        description: { 
            type: String, 
            required: [true, 'Description field is required'] 
        },
        technologies: {
            type: [String],
            validate: {
                validator: arr => {
                    return arr.length > 0;
                },
                message: 'At least one technology is required'
            }
        },
        webUrl: String,
        videoUrl: String,
        repoUrl: { 
            type: String, 
            required: [true, 'Repository field is required'] 
        }
    }
)

const Proyect = new mongoose.model(RESOURCE.PROYECT, proyectSchema)
export default Proyect