const express = require('express');
const bodyParser = require('body-parser');
const SlackPost = require('./SlackPost');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.json());
app.use(cors());

app.post('/salesOpportunity', (req, res) => {
  const opportunity = req.body;

  SlackPost(opportunity, (err) => {
    if (err) {
      res.send(err);
      console.log(`There is an issue receiving the message due to ${err}`);
    } else {
      res.send();
      console.log(`Successfully delivered message!`);
    }
  });
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000!')
});
