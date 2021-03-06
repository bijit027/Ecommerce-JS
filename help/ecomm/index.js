/*
  for run the program(npm run dev)

1.npm install express nodemon
  2. nodemon index.js
  3.npm install cookie-session
  4.npm install express-velidator
  
*/

const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const adminProductsRouter = require('./routes/admin/products');
const productsRouter = require('./routes/products');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ['lkasld235j']
  })
);
app.use(authRouter);
app.use(productsRouter);
app.use(adminProductsRouter);

app.listen(3001, () => {
  console.log('Listening');
});
