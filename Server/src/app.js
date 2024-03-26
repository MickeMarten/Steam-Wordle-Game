import express from 'express';
import fs from 'fs/promises';
import { engine } from 'express-handlebars';

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', 'views');
app.use(express.static('public'));
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});
app.get('/', async (req, res) => {
  const html = await fs.readFile('../B7-Wordle/dist/index.html');
  res.type('html').send(html);
});

app.get('/api', (req, res) => {
  res.send('Hello');
});

app.post('/api/gamehandler', (req, res) => {
  const loot = req.body;
  console.log('Loot recived', loot);
  res.status(200).json({ message: 'Loot recived' });
});

app.use('/assets', express.static('../B7-Wordle/dist/assets'));

export default app;
