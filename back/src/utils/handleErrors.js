export const resourceNotFoundError = (res, resourceName) => {
    return res.status(404).json(
        {
            error: `${resourceName} not found`,
            code: 'NOT_FOUND_ERROR'
        }
    )
}