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
 * @param {string} action modify type ('append'/'delete')
 * @param {object} payload data needed to perform the above action
 * @param {Message} message
 */
function modifyMessageList(action, payload) {
  console.log('modify messageList...');

  if (action === 'append') {
    var index = payload.index,
        message = payload.message;


    if (index === '') {
      var newMessage = new _message2.default(_data2.default.messageList.length.toString(), message);
      _data2.default.messageList.push(newMessage);
    } else {
      var indexArray = getIndexArray(index);
      _data2.default.messageList[indexArray[0]].appendMessage(indexArray.slice(1), message);
    }
  } else if (action === 'delete') {
    var _index = payload.index;

    var _indexArray = getIndexArray(_index);

    if (_indexArray.length === 1) {
      delete _data2.default.messageList[_indexArray[0]];
    } else if (_indexArray.length > 1) {
      _data2.default.messageList[_indexArray[0]].deleteMessage(_indexArray.slice(1));
    }
  }

  console.log('current messageList:');
  console.log(JSON.stringify(_data2.default.messageList, '', 2));
}

/**
 * parse the index string into index array
 * @param {string} index '0-1-0-3' type of string indicating position
 * @return {array} the index array
 */
function getIndexArray(index) {
  var indexArray = index.split('-');
  indexArray.forEach(function (index) {
    return Number(index);
  });
  return indexArray;
}