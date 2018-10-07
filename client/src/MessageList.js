import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import './MessageList.css';

const MessageList = (props) => {
  return (
    <div className="message-list">
      {props.data.filter((message) => message !== null).map((message)=> (
        <div key={`${message.index}-message-container`}>
          <Message key={message.index} content={message} methods={props.methods} />
          <div className="message-list-br"></div>
        </div>
      ))}
    </div>
  )
}

MessageList.propTypes = {
  data: PropTypes.array.isRequired,
  methods: PropTypes.exact({
    handleReply: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
  }).isRequired
}

export default MessageList;
