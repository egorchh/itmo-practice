import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const dataDir = path.join(process.cwd(), 'data');

export const config = {
    port: process.env.PORT || 5555,
    env: process.env.NODE_ENV || 'development',
    dataFiles: {
        glossary: path.join(dataDir, 'glossary.json'),
        mindMap: path.join(dataDir, 'mindmap.json')
    }
};
