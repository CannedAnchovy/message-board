'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _method = require('./method');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());

app.get('/api/comments', function (req, res) {
  console.log('GET!');
  (0, _method.sendFullData)(res);
});

app.post('/api/comments', function (req, res) {
  console.log('POST!');
  console.log(req.body);

  var _req$body = req.body,
      index = _req$body.index,
      message = _req$body.message;

  (0, _method.modifyMessageList)('append', index, message);
  (0, _method.sendFullData)(res);
});

exports.default = app;