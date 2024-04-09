import { Router } from 'express';
import { sidebar } from '../utils/serverSideRendering.js';
const aboutUsRouter = Router();
const sideMenu = sidebar('About us');

aboutUsRouter.get('/aboutus', async (req, res) => {
  try {
    res.render('aboutus', { sideMenu });
  } catch (error) {
    console.error('Error occurred while rendering the page:', error);
    res.status(500).send('Ops, något gick fel. :,(');
  }
});

export default aboutUsRouter;
