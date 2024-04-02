import { Router } from 'express';
import { sidebar } from '../utils/serverSideRendering.js';
const aboutUsRouter = Router();
const sideMenu = sidebar('About us');
aboutUsRouter.get('/aboutus', async (req, res) => {
  res.render('aboutus', { sideMenu });
});

export default aboutUsRouter;
