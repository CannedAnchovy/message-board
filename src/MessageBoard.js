import React, { Component } from 'react';
import './MessageBoard.css'
import MessageList from './MessageList';
import {MessageReply} from './Message';

class MessageBoard extends Component {
  render() {
    return (
      <div className="message-board">
        <MessageReply reply={true} />
        <MessageList />
      </div>
    );
  }
}

export default MessageBoard;
