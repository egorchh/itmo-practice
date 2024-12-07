import app from './app.js';
import { config } from './config/index.js';
import { dataService } from './services/data.service.js';
import express from 'express';
import path from 'path';

const startServer = async () => {
    try {
        await dataService.initialize(
            config.dataFiles.glossary,
            config.dataFiles.mindMap
        );

        app.use(express.static(path.join(process.cwd(), '../client/dist')));

        // Serve index.html for all routes not handled by the API
        app.get('*', (req, res) => {
          res.sendFile(path.join(process.cwd(), '../client/dist/index.html'));
        });

        app.listen(config.port, () => {
            console.log(`🚀 Server is running on port ${config.port}`);
            console.log(`🌍 Environment: ${config.env}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    process.exit(1);
});

process.on('unhandledRejection', (error) => {
    console.error('Unhandled Rejection:', error);
    process.exit(1);
});

startServer();
