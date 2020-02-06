const express = require('express');
const app = express();
const morgan = require('morgan');

require('dotenv').config();

app.use(morgan('tiny'));
app.use(express.json());

app.get('/api/customers', (req, res) => {
  
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'John', lastName: 'Doe'},
    {id: 3, firstName: 'John', lastName: 'Doe'}
  ];
  res.json(customers);
});


function notFound(req, res, next) {
  const error = new Error('Not Found');
  res.status(404);
  next(error);
}


function errorHandler(error, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: error.message
  });
}

app.use(notFound);
app.use(errorHandler);


const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});