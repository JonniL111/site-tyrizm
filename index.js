import express from 'express';

import serverRoutes from './routes/server.js';

import path from 'path';

const __dirname = path.resolve(path.dirname(''));

const PORT = process.env.PORT ?? 3001;

const app = express();

//app.use(express.static(path.join(__dirname, 'front/build'))); 
app.use(express.json());

// An api endpoint that returns a short list of items
/* app.get('/api/getList', (req,res) => {
  var list = ["item1", "item2", "item3"];
  res.json(list);
  console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/front/build/index.html'));
}); */

app.use(serverRoutes);

app.listen(PORT, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log(`Сервер на:${PORT}, запущен`);
});
