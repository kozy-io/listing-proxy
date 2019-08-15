const express = require('express');
const axios = require('axios');
const app = express();
const port = 3005;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

app.use(bodyParser());
app.use(morgan('dev'));

app.get('/loaderio-dd75192dbfebb65220c9b825e4153cec.txt', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'loaderio-dd75192dbfebb65220c9b825e4153cec.txt'));
});

app.use('/:listingID', express.static('./public/dist'));

app.all('/:listingID/desc', (req, res) => {
  let { listingID } = req.params;
  axios.get(`http://ec2-52-14-23-211.us-east-2.compute.amazonaws.com/${listingID}/desc`)
    .then(({ data }) => res.status(200).send(data))
    .catch(err => res.status(500).send(err));
})

app.all('/:listingID/basic-amen', (req, res) => {
  let { listingID } = req.params;
  axios.get(`http://ec2-52-14-23-211.us-east-2.compute.amazonaws.com/${listingID}/basic-amen`)
    .then(({ data }) => res.status(200).send(data))
    .catch(err => res.status(500).send(err));
})

app.all('/:listingID/special-amen', (req, res) => {
  let { listingID } = req.params;
  axios.get(`http://ec2-52-14-23-211.us-east-2.compute.amazonaws.com/${listingID}/special-amen`)
    .then(({ data }) => res.status(200).send(data))
    .catch(err => res.status(500).send(err));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
