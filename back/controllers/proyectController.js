import Proyect from '../models/proyectModel.js'
import { notFoundHandle } from '../utils/notFoundHandle.js'
import { validationHandle } from '../utils/validationHandle.js' 
import { RESOURCE } from '../constants/resources.js'

export const getProyects = async (req, res, next) => {
    try {
        const proyects = await Proyect.find()
        return res.json(proyects)

    } catch (err) {
        return next(err)
    }
}

export const getProyectById = async (req, res, next) => {
    try {
        const id = req.params.id
        const proyect = await Proyect.findById(id)

        if (!proyect) return notFoundHandle(res, RESOURCE.PROYECT)

        res.status(200).json(proyect)

    } catch (err) {
        return next(err)
    }
}

export const addProyect = async (req, res, next) => {
    try {
        const { name, description, technologies, link, repository } = req.body

        if (!name) return validationHandle(res, 'Name')
        if (!description) return validationHandle(res, 'Description')
        if (!repository) return validationHandle(res, 'Repository')

        const newProyect = new Proyect({ name, description, technologies, link, repository })

        const savedProyect = await newProyect.save()
        
        return res.status(201).json(savedProyect)

    } catch (err) {
        return next(err)
    }
}

export const updateProyectById = async (req, res, next) => {
    try {
        const id = req.params.id
        const updatedProyect = await Proyect.findByIdAndUpdate(id, req.params.body, { new: true })

        if (!updatedProyect) return notFoundHandle(res, RESOURCE.PROYECT)

        return res.status(200).json(updatedProyect)

    } catch (err) {
       return next(err)
    }
}

export const deleteProyectById = async (req, res, next) => {
    try {
        const id = req.params.id
        const deletedProyect = await Proyect.findByIdAndDelete(id)

        if (!deletedProyect) return notFoundHandle(res, RESOURCE.PROYECT)

        return res.status(204).end()

    } catch (err) {
        return next(err)
    }
}