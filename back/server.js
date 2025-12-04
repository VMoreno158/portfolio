import express from 'express'
import mongoose from 'mongoose'
import proyectRouter from './src/routes/proyectRoutes.js'
import experienceRouter from './src/routes/experienceRoutes.js'
import errorHandler from './src/middlewares/errorHandle.js'
import { ENV } from './src/config/env.js'

const app = express()

// Middlewares
// Decodificar body de la request (json)
app.use(express.json())
// Asignar rutas
app.use('/proyects', proyectRouter)
app.use('/experience', experienceRouter)
// Manejo de errores internos de MongoDB
app.use(errorHandler)

mongoose.connect(ENV.MONGO_URI)
    .then(() => {
        app.listen(ENV.PORT, () => {
            console.log(`Listening in http://localhost:${ENV.PORT}`)
        })
    })
    .catch(err => console.error(err))
