import Experience from '../models/experienceModel.js'

export const getExperienceListService = async () => {
    return await Experience.find()
}

export const getExperienceByIdService = async (id) => {
    return await Experience.findById(id)
}

export const addExperienceService = async (data) => {
    const newExperience = new Experience(data)
    return await newExperience.save()
}

export const updateExperienceByIdService = async (id, data) => {
    return await Experience.findByIdAndUpdate(id, data, { new: true })
}

export const deleteExperienceByIdService = async (id) => {
    return await Experience.findByIdAndDelete(id)
}