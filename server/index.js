import express from 'express';

import serverRoutes from './routes/server.js';

const PORT = process.env.PORT ?? 3001;

const app = express();

app.use(express.json());

app.use(serverRoutes);

app.listen(3001, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log(`Сервер на:3001, запущен`);
});
