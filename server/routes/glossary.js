import express from 'express';
import { downloadFile, loadData } from '../utils.js';
import { GLOSSARY_FILENAME } from '../constants.js';
import { dataStore } from '../storage.js';

const router = express.Router();

router.get('/', (req, res) => {
	const term = req.query.term;
	const glossary = dataStore.getGlossary();

	if (!glossary) {
		return res.status(500).json({ error: 'Glossary not loaded' });
	}

	if (!term) {
		return res.json(glossary);
	}

	const definition = glossary[term];
	if (definition) {
		return res.send(definition);
	}

	res.status(404).send('Term not found');
});

router.put('/', async (req, res) => {
	const { url } = req.body;

	if (!url) {
		return res.status(400).json({ error: 'Invalid glossary URL' });
	}

	try {
		await downloadFile(url, GLOSSARY_FILENAME);
		await loadData(GLOSSARY_FILENAME, dataStore.setGlossary.bind(dataStore));
		res.status(200).send('Glossary updated');
	} catch (error) {
		res.status(500).json({ error: `Failed to update glossary: ${error}` });
	}
});

export default router;
