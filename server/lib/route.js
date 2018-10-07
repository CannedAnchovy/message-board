'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _method = require('./method');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());

app.use(_express2.default.static(_path2.default.resolve(__dirname, '..', 'build')));
app.get('/', function (req, res) {
  res.sendFile(_path2.default.resolve(__dirname, '..', 'build', 'index.html'));
});

app.get('/api/comments', function (req, res) {
  console.log('GET!');
  (0, _method.sendFullData)(res);
});

app.post('/api/comments', function (req, res) {
  console.log('POST!');
  console.log(JSON.stringify(req.body, '', 2));

  var _req$body = req.body,
      action = _req$body.action,
      payload = _req$body.payload;


  (0, _method.modifyMessageList)(action, payload);
  (0, _method.sendFullData)(res);
});

exports.default = app;