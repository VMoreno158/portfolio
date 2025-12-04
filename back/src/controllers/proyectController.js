import { getProyectsService, getProyectByIdService, addProyectService, updateProyectByIdService, deleteProyectByIdService } from '../services/proyectService.js'
import { notFoundHandle, fieldRequiredHandle } from '../utils/handles.js'
import { RESOURCE } from '../config/constants.js'

export const getProyects = async (req, res, next) => {
    try {
        const proyects = await getProyectsService()
        return res.json(proyects)

    } catch (err) {
        return next(err)
    }
}

export const getProyectById = async (req, res, next) => {
    try {
        const proyect = await getProyectByIdService(req.params.id)

        if (!proyect) return notFoundHandle(res, RESOURCE.PROYECT)

        res.status(200).json(proyect)

    } catch (err) {
        return next(err)
    }
}

export const addProyect = async (req, res, next) => {
    try {
        const { name, description, technologies, link, repository } = req.body
        
        const missingFields = []

        if (!name) missingFields.push('Name')
        if (!description) missingFields.push('Description')
        if (!repository) missingFields.push('Repository')

        if (missingFields.length > 0) fieldRequiredHandle(res, missingFields)

        const savedProyect = await addProyectService({ name, description, technologies, link, repository })
        return res.status(201).json(savedProyect)

    } catch (err) {
        return next(err)
    }
}

export const updateProyectById = async (req, res, next) => {
    try {
        const updatedProyect = await updateProyectService(req.params.id, req.params.body)

        if (!updatedProyect) return notFoundHandle(res, RESOURCE.PROYECT)

        return res.status(200).json(updatedProyect)

    } catch (err) {
       return next(err)
    }
}

export const deleteProyectById = async (req, res, next) => {
    try {
        const deletedProyect = await deleteProyectById(req.params.id)

        if (!deletedProyect) return notFoundHandle(res, RESOURCE.PROYECT)

        return res.status(204).end()

    } catch (err) {
        return next(err)
    }
}