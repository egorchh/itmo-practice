import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import glossaryRoutes from './routes/glossary.js';
import mindMapRoutes from './routes/mind-map.js';
import {
	NOT_READY_MESSAGE,
	READY_MESSAGE,
	GLOSSARY_FILENAME,
	MINDMAP_FILENAME
} from './constants.js';
import { loadData } from './utils.js';
import { dataStore } from './storage.js';

dotenv.config({});

const app = express();

app.use(cors());
app.use(express.json());
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ error: 'Internal Server Error' });
});
app.use('/glossary', glossaryRoutes);
app.use('/mind-map', mindMapRoutes);

app.get('/ready', (_, res) => {
	const ready = Boolean(dataStore.getGlossary() && dataStore.getMindMap());
	const message = ready ? READY_MESSAGE : NOT_READY_MESSAGE;
	res.status(ready ? 200 : 400).send(message);
});

const PORT = process.env.PORT || 4444;

app.listen(PORT, async () => {
	console.log(`Сервер запущен на порту ${PORT}`);

	try {
		await loadData(GLOSSARY_FILENAME, dataStore.setGlossary.bind(dataStore));
		await loadData(MINDMAP_FILENAME, dataStore.setMindMap.bind(dataStore));
	} catch (error) {
		console.error('Error loading initial data:', error);
	}
});
