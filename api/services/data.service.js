import { readFile } from 'fs/promises';
import { logger } from '../utils/logger.js';

class DataService {
    constructor() {
        this.glossary = null;
        this.mindMap = null;
    }

    async loadData(filePath) {
        try {
            const data = await readFile(filePath, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            logger.error(`Error loading file: ${filePath}`, { error });
            throw error;
        }
    }

    async initialize(glossaryPath, mindMapPath) {
        try {
            this.glossary = await this.loadData(glossaryPath);
            this.mindMap = await this.loadData(mindMapPath);
            logger.info('Data successfully initialized');
        } catch (error) {
            logger.error('Failed to initialize data', { error });
            throw error;
        }
    }

    getGlossary() {
        return this.glossary;
    }

    getMindMap() {
        return this.mindMap;
    }

    isReady() {
        return Boolean(this.glossary && this.mindMap);
    }
}

export const dataService = new DataService();
