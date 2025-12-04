import { RESOURCE } from '../config/constants.js'
import { getTechnologiesService, getTechnologyByIdService, addTechnologyService, updateTechnologyByIdService, deleteTechonlogyByIdService } from '../services/technologyService.js'
import { fieldRequiredHandle, notFoundHandle } from '../utils/handles.js'

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
        if (!technology) return notFoundHandle(res, RESOURCE.TECH)

        return res.status(200).json(technology)

    } catch (err) {
        next(err)
    }
}

export const addTechnology = async (req, res, next) => {
    try {
        const { name, imgRoute } = req.params.body

        const missingFields = []

        if (!name) missingFields.push('Name')
        if (!imgRoute) missingFields.push('ImgRoute')

        if (missingFields.length > 0) return fieldRequiredHandle(res, missingFields)

        const savedTechnology = await addTechnologyService({ name, imgRoute })
        return res.status(201).json(savedTechnology)

    } catch (err) {
        next(err)
    }
}

export const updatedTechnologyById = async (req, res, next) => {
    try {
        const updatedTechnology = await updateTechnologyByIdService(req.params.id, req.params.body)
        if (!updatedTechnology) return notFoundHandle(res, RESOURCE.TECH)

        return res.status(200).json(updatedTechnology)

    } catch (err) {
        next(err)
    }
}


export const deleteTechnologyById = async (req, res, next) => {
    try {
        const deletedTechnology = await deleteTechonlogyByIdService(req.params.id)
        if (!deletedTechnology) return notFoundHandle(res, RESOURCE.EXP)

        return res.status(204).end()

    } catch (err) {
        next(err)
    }
}