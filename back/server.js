import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import proyectRouter from './src/routes/proyectRoutes.js'
import experienceRouter from './src/routes/experienceRoutes.js'
import technologyRouter from './src/routes/technologyRoutes.js'
import errorHandler from './src/middlewares/errorHandle.js'
import { ENV } from './src/config/env.js'

const app = express()

// CORS
app.use(cors({
    origin: [
        'http://localhost:3000'
    ], 
    credentials: true
}))

// Parseo del body
app.use(express.json())

// Rutas
app.use('/proyects', proyectRouter)
app.use('/experience', experienceRouter)
app.use('/technologies', technologyRouter)

// Manejo de errores
app.use(errorHandler)

mongoose.connect(ENV.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err))

if (ENV.NODE_ENV === 'dev') {
    app.listen(ENV.PORT, () => {
        console.log(`Server running on port ${ENV.PORT}`)
    })
}

export default app