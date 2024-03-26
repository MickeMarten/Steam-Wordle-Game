import { Router } from 'express';
const gameHandlerRouter = Router();

const playerMode = [];

gameHandlerRouter.post('/gamehandler', (req, res) => {
  const loot = req.body;
  playerMode.push(loot);
  console.log(playerMode);

  console.log('Loot recived', loot);
  res.status(200).json({ message: 'Loot recived' });
});

export function getPlayerMode() {
  return playerMode;
}

export default gameHandlerRouter;
