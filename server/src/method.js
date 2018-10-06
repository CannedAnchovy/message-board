import Message from './message';
import data from './data';

/**
 * send full data to frontend
 * @param {object} res express response object
 */
export function sendFullData(res) {
  console.log('send full data to frontend...');
  res.send(JSON.stringify(data));
}

/**
 * modify MessageList by specified parameter
 * @param {string} type modify type ('append'/)
 * @param {string} index
 * @param {Message} message
 */
export function modifyMessageList(type, index, message) {
  console.log('modify messageList...');

  if (type === 'append') {
    console.log('append message at ' + index);
    console.log('message:');
    console.log(message);

    if (index === '') {
      let newMessage = new Message(data.messageList.length.toString(), message);
      data.messageList.push(newMessage);
    } else {
      let indexArray = index.split('-');
      indexArray.forEach((index) => Number(index));
      console.log(indexArray);
      console.log(data.messageList[indexArray[0]]);
      data.messageList[indexArray[0]].appendMessage(indexArray.slice(1), message);
    }
  }

  console.log(data.messageList);
}
