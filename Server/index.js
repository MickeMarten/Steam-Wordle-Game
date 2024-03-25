import app from './src/app.js';
const port = process.env.PORT || 5080;

app.listen(port, () => {
  console.log(`Welcome to the real world..${port}`);
});
