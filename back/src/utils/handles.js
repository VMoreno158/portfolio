export const notFoundHandle = (res, resourceName) => {
    return res.status(404).json(
        {
            error: `${resourceName} not found`,
            code: 'NOT_FOUND_ERROR'
        }
    )
}

export const fieldRequiredHandle = (res, fields = []) => {
    return res.status(400).json(
        {
            error: `${fields.join(', ')} field(s) cannot be empty`,
            code: 'FIELDS_REQUIRED_ERROR'
        }
    )
}
