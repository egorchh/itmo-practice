const getTimestamp = () => {
    return new Date().toISOString();
};

const formatMessage = (level, message, meta = {}) => {
    return {
        timestamp: getTimestamp(),
        level,
        message,
        ...meta
    };
};

export const logger = {
    info: (message, meta) => {
        console.log(JSON.stringify(formatMessage('info', message, meta)));
    },
    error: (message, meta) => {
        console.error(JSON.stringify(formatMessage('error', message, meta)));
    },
    warn: (message, meta) => {
        console.warn(JSON.stringify(formatMessage('warn', message, meta)));
    },
    debug: (message, meta) => {
        if (process.env.NODE_ENV === 'development') {
            console.debug(JSON.stringify(formatMessage('debug', message, meta)));
        }
    }
};
