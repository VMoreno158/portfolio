export const errorHandler = (err, req, res, next) => {
    console.error(err)

    if (err.name === 'CastError') return res.status(404).json(
        {
            error: 'Invalid id format',
            code: 'MONGO_CAST_ERROR'
        }
    )
    if (err.name === 'ValidationError') return res.status(400).json(
        { 
            error: err.message,
            code: 'MONGO_VALIDATION_ERROR'
        }
    )
    return res.status(500).json(
        { 
            error: 'Internal server error',
            code: 'INTERNAL_SERVER_ERROR'
        }
    )
}