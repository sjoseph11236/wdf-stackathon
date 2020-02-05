const express = require('express');
const app = express();

app.get('api/videos', (req, res) => {
  res.send('hello');
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});