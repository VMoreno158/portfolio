import dotenv from 'dotenv'
dotenv.config()

const { 
    PORT, 
    MONGO_DB_USER, 
    MONGO_DB_PASSWORD, 
    MONGO_DB_CLUSTER_URI, 
    MONGO_DB_CLUSTER_NAME, 
    MONGO_DB_DATABASE,
    NODE_ENV
} = process.env


const requiredVars = {
    PORT,
    MONGO_DB_USER,
    MONGO_DB_PASSWORD,
    MONGO_DB_CLUSTER_URI,
    MONGO_DB_DATABASE
}

const missingVars = Object.entries(requiredVars)
    .filter(([key, value]) => !value)
    .map(([key]) => key)

if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`)
}

export const ENV = {
    PORT: parseInt(PORT, 10),
    NODE_ENV: NODE_ENV || 'dev',
    MONGO_URI: `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@${MONGO_DB_CLUSTER_URI}/${MONGO_DB_DATABASE}?appName=${MONGO_DB_CLUSTER_NAME}`,
}