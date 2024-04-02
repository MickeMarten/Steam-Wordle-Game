import Router from 'express';

const playerScoreRouter = Router();

export const playerScore = [];

playerScoreRouter.post('/playerScoreData', async (req, res) => {
  const playerResult = req.body;
  playerScore.push(playerResult);
});

export default playerScoreRouter;
