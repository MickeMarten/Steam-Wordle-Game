import express from 'express';
import fs from 'fs/promises';
import { engine } from 'express-handlebars';
import gameHandlerRouter from '../routes/gameModehandler.js';
import wordHandlerRouter from '../routes/wordhandler.js';

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', 'views');
app.use(express.static('public'));
app.use(express.json());
app.use('/api', gameHandlerRouter);
app.use('/api', wordHandlerRouter);

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});
app.get('/', async (req, res) => {
  const html = await fs.readFile('../B7-Wordle/dist/index.html');
  res.type('html').send(html);
});

// app.get('/api', (req, res) => {
//   res.send('Hello');
// });

app.use('/assets', express.static('../B7-Wordle/dist/assets'));

export default app;
