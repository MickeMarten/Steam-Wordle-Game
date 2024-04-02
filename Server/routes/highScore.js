import { Router } from 'express';
import { playerScore } from './playerScoreHandler.js';
import { sidebar } from '../utils/serverSideRendering.js';
const sideMenu = sidebar('Highscore');

const highScorePageRouter = Router();
highScorePageRouter.get('/highscore', async (req, res) => {
  res.render('highscore', { playerScore, sideMenu });
});

export default highScorePageRouter;
