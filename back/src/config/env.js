import dotenv from 'dotenv'

dotenv.config()

const { PORT, MONGO_DB_USER, MONGO_DB_PASSWORD, MONGO_DB_CLUSTER_URI, MONGO_DB_CLUSTER_NAME, MONGO_DB_DATABASE, NODE_ENV } = process.env;

if (!PORT || !MONGO_DB_USER || !MONGO_DB_PASSWORD || !MONGO_DB_CLUSTER_URI || !MONGO_DB_DATABASE) throw new Error('Missing required environment variables')

export const ENV = {
    PORT,
    NODE_ENV: NODE_ENV || 'prod',
    MONGO_URI: `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@${MONGO_DB_CLUSTER_URI}/${MONGO_DB_DATABASE}?appName=${MONGO_DB_CLUSTER_NAME}`
}