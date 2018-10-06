/**
 * class Message
 */
class Message {
  /**
   * constructor of class Message
   * @param {string} index index (position) of this message
   * @param {object} message object containing author, time, and text
   */
  constructor(index, message) {
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
  appendMessage(indexArray, message) {
    if (indexArray.length === 0) {
      this.child.push(new Message(this.index + '-' + this.child.length.toString(), message));
    } else {
      this.child[indexArray[0]].appendMessage(indexArray.slice(1), message);
    }
  }
}

export default Message;
