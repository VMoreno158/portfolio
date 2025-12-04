import express from 'express'
import { getExperienceList, getExperienceById } from '../controllers/experienceController.js'

const router = express.Router()

router.get('/', getExperienceList)

router.get('/:id', getExperienceById)

export default router