import express from 'express';

const app = express();

console.log('====================================');
console.log('heelo');
console.log('====================================');
app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.get('/hello', (req, res) => res.send('Express + TypeScript Server'));

const PORT = 2222;
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
