import { getProyectsService, getProyectByIdService, addProyectService, updateProyectByIdService, deleteProyectByIdService } from '../services/proyectService.js'
import { resourceNotFoundError } from '../utils/handleErrors.js'
import { RESOURCE } from '../config/constants.js'

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
        if (!proyect) return resourceNotFoundError(res, RESOURCE.PROYECT)
        res.status(200).json(proyect)

    } catch (err) {
        return next(err)
    }
}

export const addProyect = async (req, res, next) => {
    try {
        const savedProyect = await addProyectService(req.body)
        return res.status(201).json(savedProyect)

    } catch (err) {
        return next(err)
    }
}

export const updateProyectById = async (req, res, next) => {
    try {
        // Remove fields (future)
        /* 
        if (Array.isArray(removeFields) && removeFields.length > 0) {
            const removeFieldErrorList = []
            const allowedFields = ['webUrl', 'videoUrl']

            updateOps.$unset = {}

            removeFields.forEach(f => allowedFields.includes(f.trim()) ? updateOps.$unset[f.trim()] = '' : removeFieldErrorList.push(f.trim()))

            if (removeFieldErrorList.length > 0) return fieldsCannotBeRemoveError(res, removeFieldErrorList)
        } 
        */

        const updatedProyect = await updateProyectByIdService(req.params.id, req.body)
        if (!updatedProyect) return resourceNotFoundError(res, RESOURCE.PROYECT)
        return res.status(200).json(updatedProyect)

    } catch (err) {
        return next(err)
    }
}

export const deleteProyectById = async (req, res, next) => {
    try {
        const deletedProyect = await deleteProyectByIdService(req.params.id)
        if (!deletedProyect) return resourceNotFoundError(res, RESOURCE.PROYECT)
        return res.status(204).end()

    } catch (err) {
        return next(err)
    }
}