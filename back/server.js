import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import router from './routes/proyectRoutes.js'
import { errorHandler } from './middlewares/errorHandle.js'

dotenv.config()
const app = express()

// Middlewares
// Decodificar body de la request (json)
app.use(express.json())
// Asignar rutas
app.use('/proyects', router)
// Manejo de errores
app.use(errorHandler)

const PORT = process.env.PORT || 80
const MONGO_DB_URI = `mongodb+srv://vmd_user15082002db:NufzZVVq3Zn5M0pV@sandbox-cluster.z6qhuvt.mongodb.net/portfolio_db?appName=sandbox-cluster`

mongoose.connect(MONGO_DB_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Listening in http://localhost:${PORT}`)
        })
    })
    .catch(err => console.error(err))
