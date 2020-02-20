const express = require("express");
const app = express();
const data = require('./data.json');
const port = 3000;

app.get('/api/dreams', (req, res) => {
    res.send({data});
  });

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

