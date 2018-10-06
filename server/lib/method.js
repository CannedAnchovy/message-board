'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendFullData = sendFullData;
exports.modifyMessageList = modifyMessageList;

var _message = require('./message');

var _message2 = _interopRequireDefault(_message);

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * send full data to frontend
 * @param {object} res express response object
 */
function sendFullData(res) {
  console.log('send full data to frontend...');
  res.send(JSON.stringify(_data2.default));
}

/**
 * modify MessageList by specified parameter
 * @param {string} type modify type ('append'/)
 * @param {string} index
 * @param {Message} message
 */
function modifyMessageList(type, index, message) {
  console.log('modify messageList...');

  if (type === 'append') {
    console.log('append message at ' + index);
    console.log('message:');
    console.log(message);

    if (index === '') {
      var newMessage = new _message2.default(_data2.default.messageList.length.toString(), message);
      _data2.default.messageList.push(newMessage);
    } else {
      var indexArray = index.split('-');
      indexArray.forEach(function (index) {
        return Number(index);
      });
      console.log(indexArray);
      console.log(_data2.default.messageList[indexArray[0]]);
      _data2.default.messageList[indexArray[0]].appendMessage(indexArray.slice(1), message);
    }
  }

  console.log(_data2.default.messageList);
}