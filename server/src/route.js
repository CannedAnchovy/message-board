import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import {sendFullData, modifyMessageList} from './method';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.get('/api/comments', (req, res) => {
  console.log('GET!');
  sendFullData(res);
});

app.post('/api/comments', (req, res) => {
  console.log('POST!');
  console.log(JSON.stringify(req.body, '', 2));

  let {action, payload} = req.body;

  modifyMessageList(action, payload);
  sendFullData(res);
});

export default app;
