import { Router } from 'express';
import { getMindMap } from '../controllers/mindmap.controller.js';

const router = Router();

router.get('/', getMindMap);

export default router;
