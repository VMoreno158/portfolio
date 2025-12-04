import Technology from '../models/technologyModel.js'

export const getTechnologiesService = async () => {
    return await Technology.find()
}

export const getTechnologyByIdService = async (id) => {
    return await Technology.findById(id)
}

export const addTechnologyService = async (data) => {
    const newTechnology = new Technology(data)
    return await newTechnology.save()
}

export const updateTechnologyByIdService = async (id, data) => {
    return await Technology.findByIdAndUpdate(id, data, { new: true })
}

export const deleteTechonlogyByIdService = async (id) => {
    return await Technology.findByIdAndDelete(id)
}