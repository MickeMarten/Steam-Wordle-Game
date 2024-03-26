import Router from 'express';
const wordHandlerRouter = Router();

wordHandlerRouter.get('/wordhandler', (req, res) => {
  res.send('Hello');
});

export default wordHandlerRouter;
