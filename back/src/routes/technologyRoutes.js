import express from 'express'
import { getTechnologies, getTechnologyById, addTechnology, updatedTechnologyById, deleteTechnologyById } from '../controllers/technologyController.js'

const router = express.Router()

router.get('/', getTechnologies)
router.get('/:id', getTechnologyById)
// router.post('/', addTechnology)
// router.put('/:id', updatedTechnologyById)
// router.delete('/:id', deleteTechnologyById)

export default router