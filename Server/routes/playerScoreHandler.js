import Router from 'express';

const playerScoreRouter = Router();

playerScoreRouter.post('/playerScoreData', async (req, res) => {
  const playerResult = req.body;
  console.log(playerResult);
});

export default playerScoreRouter;
