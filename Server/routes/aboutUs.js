import { Router } from 'express';
const aboutUsRouter = Router();

aboutUsRouter.get('/aboutus', async (req, res) => {
  res.render('aboutus');
});

export default aboutUsRouter;
