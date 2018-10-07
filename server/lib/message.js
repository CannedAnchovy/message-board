'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * class Message
 */
var Message = function () {
  /**
   * constructor of class Message
   * @param {string} index index (position) of this message
   * @param {object} message object containing author, time, and text
   */
  function Message(index, message) {
    _classCallCheck(this, Message);

    this.index = index;
    this.author = message.author;
    this.time = message.time;
    this.text = message.text;
    this.child = [];
  }

  /**
   * append new message to where it belongs (according to index array)
   * @param {array} indexArray array of index
   * @param {object} message object containing author, time, and text
   */


  _createClass(Message, [{
    key: 'appendMessage',
    value: function appendMessage(indexArray, message) {
      if (indexArray.length === 0) {
        this.child.push(new Message(this.index + '-' + this.child.length.toString(), message));
      } else {
        this.child[indexArray[0]].appendMessage(indexArray.slice(1), message);
      }
    }

    /**
     * delete message specified by index array
     * @param {array} indexArray array of index
     */

  }, {
    key: 'deleteMessage',
    value: function deleteMessage(indexArray) {
      if (indexArray.length === 1) {
        delete this.child[indexArray[0]];
      } else if (indexArray.length > 1) {
        this.child[indexArray[0]].deleteMessage(indexArray.slice(1));
      }
    }
  }]);

  return Message;
}();

exports.default = Message;