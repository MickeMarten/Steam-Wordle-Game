import gameModehandler from '../utils/randomWordSelector.js';
import { Router } from 'express';
const wordHandlerRouter = Router();

wordHandlerRouter.post('/gamemodehandler', async (req, res) => {
  try {
    const loot = req.body;
    let playerMode = loot;
    const randomWord = await gameModehandler(playerMode);

    res.status(200).send({ randomWord: randomWord });
  } catch (error) {
    console.error(
      'Error occurred while handling the game mode request:',
      error
    );
    res.status(500).send('Internal Server Error');
  }
});
export default wordHandlerRouter;
