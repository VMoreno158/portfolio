import Proyect from "../models/proyectModel.js"

export const getProyectsService = async () => {
    return await Proyect.find()
}

export const getProyectByIdService = async (id) => {
    return await Proyect.findById(id)
}

export const addProyectService = async (data) => {
    const newProyect = new Proyect(data)
    return await newProyect.save()
}

export const updateProyectByIdService = async (id, data) => {
    return await Proyect.findByIdAndUpdate(id, data, { new: true })
}

export const deleteProyectByIdService = async (id) => {
    return await Proyect.findByIdAndDelete(id)
}