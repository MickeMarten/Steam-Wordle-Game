import { Router } from 'express';
const aboutUsRouter = Router();

aboutUsRouter.get('/aboutus', async (req, res) => {
  res.render('highscore');
});

export default aboutUsRouter;
