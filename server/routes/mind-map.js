import express from 'express';
import { downloadFile, loadData } from '../utils.js';
import { MINDMAP_FILENAME } from '../constants.js';
import { dataStore } from '../storage.js';

const router = express.Router();

router.get('/', (req, res) => {
	const mindMap = dataStore.getMindMap();

	if (!mindMap) {
		return res.status(500).json({ error: 'Mind map not loaded' });
	}

	res.status(200).json(mindMap);
});

router.put('/', async (req, res) => {
	const { url } = req.body;

	if (!url) {
		return res.status(400).json({ error: 'Invalid mind map URL' });
	}

	try {
		await downloadFile(url, MINDMAP_FILENAME);
		await loadData(MINDMAP_FILENAME, dataStore.setMindMap);
		res.status(200).send('Mind map updated');
	} catch (error) {
		res.status(500).json({ error: `Failed to update mind map: ${error}` });
	}
});

export default router;
