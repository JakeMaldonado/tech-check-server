'use strict';
const bodyParser = require('body-parser');
const express = require('express');
const request = require("request");

let port = process.env.PORT || 3000;

const app = express();

let searchBody = (body, key) => {
  return body.includes(key) ? true : false;
};

let searchTech = async (url, techKey) => {
  request(url, (error, response, body) => {
      if (!error) {
        return { "result": searchBody(body, techKey) };
      } else {
        return { "error": error };
      }
  });
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/techSearch', async (req, res) => {
  try {
    let isTech = await searchTech(req.body.url, req.body.key);
    res.send(isTech);
  } catch (e) {
    res.send(e);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
