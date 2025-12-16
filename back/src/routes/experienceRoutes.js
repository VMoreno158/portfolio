import express from 'express'
import { getExperienceList, getExperienceById, addExperience, updateExperienceById, deleteExperienceById } from '../controllers/experienceController.js'

const router = express.Router()

router.get('/', getExperienceList)
router.get('/:id', getExperienceById)
// router.post('/', addExperience)
// router.put('/:id', updateExperienceById)
// router.delete('/:id', deleteExperienceById)

export default router