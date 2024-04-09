import { Router } from 'express';
// import { playerScore } from './playerScoreHandler.js';
import { sidebar } from '../utils/serverSideRendering.js';
import { playerScoreData } from '../src/models.js';
import mongoose from 'mongoose';
const sideMenu = sidebar('Highscore');
const highScorePageRouter = Router();

highScorePageRouter.get('/highscore', async (req, res) => {
  try {
    const playerScore = await playerScoreData.find().lean();
    res.render('highscore', { playerScore, sideMenu });
  } catch (error) {
    console.error(
      'Error occurred while fetching player scores or rendering the page:',
      error
    );
    res.status(500).send('Ops, något gick fel :,(');
  }
});

export default highScorePageRouter;
