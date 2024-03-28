import Router from 'express';

const playerScoreRouter = Router();

playerScoreRouter.get('/playerScoreData', (req, res) => {
  res.send('Highscore');
});

export default playerScoreRouter;
