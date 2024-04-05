import app from './src/app.js';
import { mongoose } from 'mongoose';
const port = process.env.PORT || 5080;
mongoose.connect(process.env.DATA_BASE);

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
