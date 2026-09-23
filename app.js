const express = require('express');

const app = express();

app.set('view engine', 'ejs');

const productRouter = require('./routes/product');

app.use('/products', productRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my Express JS app!');
});

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
