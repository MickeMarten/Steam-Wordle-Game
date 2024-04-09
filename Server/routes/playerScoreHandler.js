import Router from 'express';
import { playerScoreData } from '../src/models.js';

const playerScoreRouter = Router();

playerScoreRouter.post('/playerScoreData', async (req, res) => {
  try {
    const playerResult = req.body;
    const playerResultData = new playerScoreData(playerResult);
    await playerResultData.save();
    res.status(200).send('Player score saved successfully.');
  } catch (error) {
    console.error('Error occurred while saving player score:', error);
    res.status(500).send('Internal Server Error');
  }
});

export default playerScoreRouter;
