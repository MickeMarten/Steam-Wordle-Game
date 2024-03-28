import gameModehandler from '../utils/randomWordSelector.js';
import { Router } from 'express';
const wordHandlerRouter = Router();

// let words;

// fs.readFile('../utils/words_dictionary.json', (err, data) => {
// });

wordHandlerRouter.post('/gamemodehandler', async (req, res) => {
  const loot = req.body;
  let playerMode = loot;
  const randomWord = await gameModehandler(playerMode);

  res.status(200).send({ randomWord: randomWord });
});

export default wordHandlerRouter;
