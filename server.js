const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'));

app.get('/api/videos', (req, res) => {
  res.send('hello');
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});