import { dataService } from '../services/data.service.js';
import { ServiceUnavailableError } from '../utils/errors.js';

export const getGlossary = async (req, res, next) => {
    try {
        const { term } = req.query;
        const glossary = dataService.getGlossary();

        if (!glossary) {
            throw new ServiceUnavailableError('Glossary data not available');
        }

        if (term) {
            const singleTermFromGlossary = glossary.data.find(item =>
                item.term.toLowerCase().includes(term.toLowerCase())
            );
            return res.json(singleTermFromGlossary);
        }

        res.json(glossary);
    } catch (error) {
        next(error);
    }
};
