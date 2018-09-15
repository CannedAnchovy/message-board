import React, {Component} from 'react';
import './Message.css';

export const MessageReply = (props) => {
  if(!props.reply) return <div></div>;
  return (
    <div className="message-reply">
      <textarea rows="5" placeholder="What are your thoughts?" className="message-reply-input">
      </textarea>
      <div className="message-reply-action">
        <div className="message-reply-action-button">Reply</div>
        <div className="message-reply-action-button">Cancel</div>
      </div>
    </div>
  );
}

const MessageChild = (props) => {
  if (props.child.length === 0) return <div></div>;
  return (
    <div className="message-child">
      {props.child.map((message) => (
        <Message key={message.id} content={message} />
      ))}
    </div>
  )
}

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      replyOpen: false,
    };
    this.handleReplyToggle = this.handleReplyToggle.bind(this);
  }

  handleReplyToggle() {
    this.setState({replyOpen: !this.state.replyOpen});
  }

  render() {
    const {author, time, text, child} = this.props.content;
    return (
      <div className="message">
        <div className="message-info">
          <span className="message-info-author">{author}</span>
          <span className="message-info-time">{time}</span>
        </div>
        <div className="message-content">{text}</div>
        <div className="message-action">
          <div className="message-action-link" onClick={this.handleReplyToggle}>Reply</div>
          <div className="message-action-link">Share</div>
          <div className="message-action-link">Save</div>
          <div className="message-action-link">Report</div>
        </div>
        <MessageReply reply={this.state.replyOpen} />
        <MessageChild child={child} />
      </div>
    )
  }
}

export default Message;
