import { RESOURCE } from '../config/constants.js'
import { getTechnologiesService, getTechnologyByIdService, addTechnologyService, updateTechnologyByIdService, deleteTechonlogyByIdService } from '../services/technologyService.js'
import { resourceNotFoundError } from '../utils/handleErrors.js'

export const getTechnologies = async (req, res, next) => {
    try {
        const technologies = await getTechnologiesService()
        return res.status(200).json(technologies)

    } catch (err) {
        next(err)
    }
}

export const getTechnologyById = async (req, res, next) => {
    try {
        const technology = await getTechnologyByIdService(req.params.id)
        if (!technology) return resourceNotFoundError(res, RESOURCE.TECH)
        return res.status(200).json(technology)

    } catch (err) {
        next(err)
    }
}

export const addTechnology = async (req, res, next) => {
    try {
        const savedTechnology = await addTechnologyService(req.body)
        return res.status(201).json(savedTechnology)

    } catch (err) {
        next(err)
    }
}

export const updatedTechnologyById = async (req, res, next) => {
    try {
        const updatedTechnology = await updateTechnologyByIdService(req.params.id, req.params.body)
        if (!updatedTechnology) return resourceNotFoundError(res, RESOURCE.TECH)
        return res.status(200).json(updatedTechnology)

    } catch (err) {
        next(err)
    }
}


export const deleteTechnologyById = async (req, res, next) => {
    try {
        const deletedTechnology = await deleteTechonlogyByIdService(req.params.id)
        if (!deletedTechnology) return resourceNotFoundError(res, RESOURCE.EXP)
        return res.status(204).end()

    } catch (err) {
        next(err)
    }
}