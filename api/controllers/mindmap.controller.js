import { dataService } from '../services/data.service.js';

export const getMindMap = async (req, res) => {
    try {
        const mindMap = dataService.getMindMap();
        if (!mindMap) {
            return res.status(503).json({ error: 'Mind map data not available' });
        }
        res.json(mindMap);
    } catch (error) {
        console.error('Error in getMindMap:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
