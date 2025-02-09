import express from 'express';
import { getNumberFact } from '../controllers/number-api.controller';

const router = express.Router();

router.get('/', (req, res) => {
	res.send('Welcome to my Numbers API');
});

router.get('/api/classify-number', getNumberFact);

export default router;
