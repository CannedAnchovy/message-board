import React, { Component } from 'react';
import './MessageBoard.css'
import MessageList from './MessageList';
import MessageReply from './MessageReply';

class MessageBoard extends Component {

  render() {
    return (
      <div className="message-board">
        <MessageReply reply={true} noCancel={true}/>
        <MessageList />
      </div>
    );
  }
}

export default MessageBoard;
