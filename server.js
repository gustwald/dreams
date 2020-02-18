const express = require("express");
const app = express();
const data = require('./data.json');
const port = 3000;

// const groupBy = key => array =>
//   array.reduce((objectsByKeyValue, obj) => {
//     const value = obj.transaction[key];
//     objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
//     return objectsByKeyValue;
//   }, {});

app.get('/api/dreams', (req, res) => {
    // const groupById = groupBy('dreamId');
    // const dreams = data && groupById(data);
    res.send({data});
  });

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

