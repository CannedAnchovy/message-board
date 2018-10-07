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
 * @param {string} action modify type ('append'/'delete')
 * @param {object} payload data needed to perform the above action
 * @param {Message} message
 */
export function modifyMessageList(action, payload) {
  console.log('modify messageList...');

  if (action === 'append') {
    let {index, message} = payload;

    if (index === '') {
      let newMessage = new Message(data.messageList.length.toString(), message);
      data.messageList.push(newMessage);
    } else {
      let indexArray = getIndexArray(index);
      data.messageList[indexArray[0]].appendMessage(indexArray.slice(1), message);
    }
  } else if (action === 'delete') {
    let {index} = payload;
    let indexArray = getIndexArray(index);

    if (indexArray.length === 1) {
      delete data.messageList[indexArray[0]];
    } else if (indexArray.length > 1) {
      data.messageList[indexArray[0]].deleteMessage(indexArray.slice(1));
    }
  }

  console.log('current messageList:');
  console.log(JSON.stringify(data.messageList, '', 2));
}

/**
 * parse the index string into index array
 * @param {string} index '0-1-0-3' type of string indicating position
 * @return {array} the index array
 */
function getIndexArray(index) {
  let indexArray = index.split('-');
  indexArray.forEach((index) => Number(index));
  return indexArray;
}

