import { getExperienceListService, getExperienceByIdService, addExperienceService, updateExperienceByIdService, deleteExperienceByIdService } from '../services/experienceService.js'
import { notFoundHandle, fieldRequiredHandle } from '../utils/handles.js'
import { RESOURCE } from '../config/constants.js'

export const getExperienceList = async (req, res, next) => {
  try {
    const experienceList = await getExperienceListService()
    return res.status(200).json(experienceList)

  } catch (err) {
    return next(err)
  }
}

export const getExperienceById = async (req, res, next) => {
  try {
    const experience = await getExperienceByIdService(req.params.id)
    if (!experience) return notFoundHandle(res, RESOURCE.EXP)
    return res.status(200).json(experience)

  } catch (err) {
    next(err)
  }
}

export const addExperience = async (req, res, next) => {
  try {
    const { title, description, startDate, finishDate, type, active } = req.params.body

    const missingFields = []

    if (!title) missingFields.push('Title')
    if (!startDate) missingFields.push('StartDate')

    if (missingFields.length > 0) fieldRequiredHandle(res, missingFields)

    const savedExperience = await addExperienceService({ title, description, startDate, finishDate, type, active })
    return res.status(201).json(savedExperience)

  } catch (err) {
    next(err)
  }
}

export const updateExperience = async (req, res, next) => {
  try {
    const updatedExperience = await updateExperienceService(req.params.id, req.params.body)

    if (!updatedExperience) notFoundHandle(res, RESOURCE.EXP)

    return res.status(200).json(updatedExperience)

  } catch (err) {
    next(err)
  }
}

export const deleteExperienceById = async (req, res, next) => {
  try {
    const deletedProyect = await deleteExperienceByIdService(id)

    if (!deletedProyect) notFoundHandle(res, RESOURCE.EXP)

    return res.status(204).end()

  } catch (err) {
    next(err)
  }
}