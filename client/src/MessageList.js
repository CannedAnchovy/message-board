import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import './MessageList.css';

const MessageList = (props) => {
  if (props.data === undefined) return <div className="message-list"></div>;
  return (
    <div className="message-list">
      {props.data.map((message)=> (
        <div key={`${message.index}-message-container`}>
          <Message key={message.index} content={message} handleReply={props.handleReply} />
          <div className="message-list-br"></div>
        </div>
      ))}
    </div>
  )
}

MessageList.propTypes = {
  data: PropTypes.array.isRequired
}

export default MessageList;
