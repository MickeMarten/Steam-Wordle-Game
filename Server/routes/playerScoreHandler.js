import Router from 'express';
import { playerScoreData } from '../src/models.js';

const playerScoreRouter = Router();
playerScoreRouter.post('/playerScoreData', async (req, res) => {
  const playerResult = req.body;
  const playerResultData = new playerScoreData(playerResult);
  await playerResultData.save();
});

export default playerScoreRouter;
