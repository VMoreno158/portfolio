import express from 'express'
import { getProyects, getProyectById, addProyect, updateProyectById, deleteProyectById } from '../controllers/proyectController.js'

const router = express.Router()

router.get('/', getProyects)

router.get('/:id', getProyectById)  

router.post('/', addProyect)

router.put('/:id', updateProyectById)

router.delete('/:id', deleteProyectById)

export default router