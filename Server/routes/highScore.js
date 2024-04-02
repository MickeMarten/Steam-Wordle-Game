import { Router } from 'express';

const highScorePageRouter = Router();

highScorePageRouter.get('/highscore', async (req, res) => {
  res.render('highscore');
});

export default highScorePageRouter;
