export const validationHandle = (res, fieldName) => {
    return res.status(400).json(
        {
            error: `${fieldName} field cannot be empty`,
            code: 'VALIDATION_ERROR'
        }
    )
}