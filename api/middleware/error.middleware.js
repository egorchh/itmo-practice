import { logger } from '../utils/logger.js';
import { AppError } from '../utils/errors.js';

export const errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    if (process.env.NODE_ENV === 'development') {
        logger.error('Error details:', {
            error: err,
            stack: err.stack
        });

        res.status(err.statusCode).json({
            status: err.status,
            error: err,
            message: err.message,
            stack: err.stack
        });
    } else {
        // Production mode
        if (err instanceof AppError) {
            logger.error('Operational error:', {
                statusCode: err.statusCode,
                message: err.message
            });

            res.status(err.statusCode).json({
                status: err.status,
                message: err.message
            });
        } else {
            // Programming or unknown error
            logger.error('Unexpected error:', {
                error: err,
                stack: err.stack
            });

            res.status(500).json({
                status: 'error',
                message: 'Something went wrong'
            });
        }
    }
};
