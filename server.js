const express = require('express');
const app = express();
const morgan = require('morgan');

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

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});