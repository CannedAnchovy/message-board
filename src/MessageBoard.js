import React, { Component } from 'react';
import './MessageBoard.css'
import MessageList from './MessageList';

class MessageBoard extends Component {
  render() {
    return (
      <div className="message-board">
        <MessageList />
      </div>
    );
  }
}

export default MessageBoard;
