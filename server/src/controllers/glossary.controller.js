import { dataService } from '../services/data.service.js';
import { ServiceUnavailableError } from '../utils/errors.js';

export const getGlossary = async (req, res, next) => {
    try {
        const glossary = dataService.getGlossary();
        if (!glossary) {
            throw new ServiceUnavailableError('Glossary data not available');
        }
        res.json(glossary);
    } catch (error) {
        next(error);
    }
};
