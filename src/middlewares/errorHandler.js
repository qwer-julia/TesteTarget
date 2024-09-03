import InvalidData from '../errors/InvalidData.js';

function isValidationError(err) {
    return [InvalidData].some(errorClass => err instanceof errorClass);}

const errorHandler = (err, req, res, next) => {
    if (isValidationError(err)) {
        res.status(err.statusCode).json({
            error_code: err.errorCode,
            error_description: err.message
        });
    }
    else {
        res.status(500).json({
            error_code: 'INTERNAL_SERVER_ERROR',
            error_description: err.message
        });
    }
};

export default errorHandler;