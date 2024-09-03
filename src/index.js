import express from 'express';
import routes from './routes/index.js';
import errorHandler from './middlewares/errorHandler.js';
//import path from 'path';

const app = express();
const port = 3000;

app.use(express.json({ limit: '10mb' }));
app.use(routes)
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
  });
  