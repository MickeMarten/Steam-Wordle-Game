import gameModehandler from '../utils/gameModeHandlerUtils.js';
import { Router } from 'express';
import fs from 'fs';
import  wordsJson  from '../utils/words_dictionary.json' with {type: "json"};
const gameHandlerRouter = Router();

let words;

fs.readFile('../utils/words_dictionary.json', (err, data) => {
  console.log(data);
});
gameHandlerRouter.post('/gamehandler', async (req, res) => {
  const loot = req.body;
  let playerMode = loot;
  const randomWord = await gameModehandler(playerMode);

  res.status(200).send({ randomWord: randomWord });
});

export default gameHandlerRouter;
