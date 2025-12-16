import { getExperienceListService, getExperienceByIdService, addExperienceService, updateExperienceByIdService, deleteExperienceByIdService } from '../services/experienceService.js'
import { resourceNotFoundError } from '../utils/handleErrors.js'
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
    if (!experience) return resourceNotFoundError(res, RESOURCE.EXP)
    return res.status(200).json(experience)

  } catch (err) {
    next(err)
  }
}

export const addExperience = async (req, res, next) => {
  try {

    const savedExperience = await addExperienceService(req.body)
    return res.status(201).json(savedExperience)

  } catch (err) {
    next(err)
  }
}

export const updateExperienceById = async (req, res, next) => {
  try {
    const updatedExperience = await updateExperienceByIdService(req.params.id, req.body)
    if (!updatedExperience) return resourceNotFoundError(res, RESOURCE.EXP)
    return res.status(200).json(updatedExperience)

  } catch (err) {
    next(err)
  }
}

export const deleteExperienceById = async (req, res, next) => {
  try {
    const deletedExperience = await deleteExperienceByIdService(req.params.id)
    if (!deletedExperience) return resourceNotFoundError(res, RESOURCE.EXP)
    return res.status(204).end()

  } catch (err) {
    next(err)
  }
}