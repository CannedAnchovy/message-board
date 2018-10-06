import express from 'express';
import bodyParser from 'body-parser';
import {sendFullData, modifyMessageList} from './method';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/api/comments', (req, res) => {
  console.log('GET!');
  sendFullData(res);
});

app.post('/api/comments', (req, res) => {
  console.log('POST!');
  console.log(req.body);

  let {index, message} = req.body;
  modifyMessageList('append', index, message);
  sendFullData(res);
});

export default app;
