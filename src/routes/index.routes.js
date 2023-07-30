import express from 'express';
import controller from '../controller/index.controller.js'

const router = express.Router();

router.get('/', controller.index)

export default router;