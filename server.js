'use strict';
const bodyParser = require('body-parser');
const express = require('express');
const request = require("request");

let port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let searchHtml = (html, key) => {
  return html.includes(key) ? true : false;
};

app.post('/techSearch', (req, res) => {
  console.log(req);
  request(url, (error, response, body) => {
      if (!error) {
        res.send({ "result": searchBody(body, techKey) });
      } else {
        res.send({ "error": error });
      }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
