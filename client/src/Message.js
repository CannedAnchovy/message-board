import React, {Component} from 'react';
import './Message.css';
import MessageReply from './MessageReply';

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
    this.handleCancelReply = this.handleCancelReply.bind(this);
  }

  handleReplyToggle() {
    this.setState({replyOpen: !this.state.replyOpen});
  }

  handleCancelReply() {
    this.setState({replyOpen: false});
  }

  timesAgo(dateString) {
    const replyTime = new Date(dateString);
    console.log(replyTime);
    const currentTime = new Date();
    console.log(currentTime);
    let number = 0;
    let scale;

    let array = [
      {scale: 'year', func: 'getFullYear'},
      {scale: 'month', func: 'getMonth'},
      {scale: 'day', func: 'getDate'},
      {scale: 'hour', func: 'getHours'},
      {scale: 'minute', func: 'getMinutes'},
    ]

    for(let i=0; i<array.length; i++) {
      if(currentTime[array[i].func]() > replyTime[array[i].func]()) {
        console.log(array[i]);
        number = currentTime[array[i].func]() - replyTime[array[i].func]();
        scale = array[i].scale;
        break;
      }
    }
    console.log(number);
    console.log(scale);
    if(number === 0) return 'just now';
    else if(number === 1) return '1 ' + scale + ' ago';
    else return number + ' ' + scale + 's ago';
  }

  render() {
    const {author, time, text, child} = this.props.content;
    return (
      <div className="message">
        <div className="message-info">
          <span className="message-info-author">{author}</span>
          <span className="message-info-time">{this.timesAgo(time)}</span>
        </div>
        <div className="message-content">{text}</div>
        <div className="message-action">
          <div className="message-action-link" onClick={this.handleReplyToggle}>Reply</div>
          <div className="message-action-link">Share</div>
          <div className="message-action-link">Save</div>
          <div className="message-action-link">Report</div>
        </div>
        <MessageReply reply={this.state.replyOpen} onCancel={this.handleCancelReply}/>
        <MessageChild child={child} />
      </div>
    )
  }
}

export default Message;
