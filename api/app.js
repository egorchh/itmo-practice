import express from 'express';
import cors from 'cors';
import { config } from './config/index.js';
import glossaryRoutes from './routes/glossary.routes.js';
import mindMapRoutes from './routes/mindmap.routes.js';
import { errorHandler } from './middleware/error.middleware.js';
import { requestLogger } from './middleware/logger.middleware.js';
import { dataService } from './services/data.service.js';

const app = express();

app.use(cors({
  origin: ['https://egorchh.github.io', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));
app.use(express.json());
app.use(requestLogger);

app.get('/ready', (_, res) => {
    const isReady = dataService.isReady();
    res.status(isReady ? 200 : 503).json({
        status: isReady ? 'ready' : 'not_ready',
        message: isReady ? 'Service is ready' : 'Service is initializing'
    });
});

app.use('/glossary', glossaryRoutes);
app.use('/mind-map', mindMapRoutes);

app.use(errorHandler);

app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

export default app;
