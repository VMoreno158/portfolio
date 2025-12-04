import mongoose from 'mongoose'
import { RESOURCE } from '../config/constants.js'

const technologySchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, 'Name field is required']
        },
        imgRoute: {
            type: String,
            required: [true, 'ImgRoute field is required']
        }
    }
)

const Technology = new mongoose.model(RESOURCE.TECH, technologySchema)

export default Technology