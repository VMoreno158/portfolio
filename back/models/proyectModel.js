import mongoose from 'mongoose';

const proyectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    technologies: [{ type: String }],
    link: { type: String },
    repository: { type: String, required: true }
})

const Proyect = new mongoose.model('Proyect', proyectSchema)
export default Proyect