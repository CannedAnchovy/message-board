import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MessageReply from './MessageReply';
import './Message.css';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      replyOpen: false,
      commentOpen: true
    };

    this.handleToggleReply = this.handleToggleReply.bind(this);
    this.handleCloseReply = this.handleCloseReply.bind(this);
    this.handleReply = this.handleReply.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleToggleReply() {
    this.setState({replyOpen: !this.state.replyOpen});
  }

  handleCloseReply() {
    this.setState({replyOpen: false});
  }

  handleReply(message) {
    return this.props.methods.handleReply(this.props.content.index, message);
  }

  handleDelete() {
    return this.props.methods.handleDelete(this.props.content.index);
  }

  renderMessageReply() {
    if (!this.state.replyOpen) return <div></div>;
    return (
      <MessageReply
        noCancel={false}
        handleReply={this.handleReply}
        handleCloseReply={this.handleCloseReply}
      />
    );
  }

  renderMessageChild() {
    let child = this.props.content.child.filter((message) => message !== null);

    if (child.length === 0) return <div></div>;
    return (
      <div className="message-child">
        {child.map((message) => (
          <Message key={message.index} content={message} methods={this.props.methods}/>
        ))}
      </div>
    )
  }

  timesAgo(dateString) {
    const replyTime = new Date(dateString);
    const currentTime = new Date();
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
        number = currentTime[array[i].func]() - replyTime[array[i].func]();
        scale = array[i].scale;
        break;
      }
    }

    if(number === 0) return 'just now';
    else if(number === 1) return '1 ' + scale + ' ago';
    else return number + ' ' + scale + 's ago';
  }

  render() {
    const {author, time, text} = this.props.content;
    return (
      <div className="message">
        <div className="message-info">
          <span className="message-info-author">{author}</span>
          <span className="message-info-time">{this.timesAgo(time)}</span>
        </div>
        <div className="message-content">{text}</div>
        <div className="message-action">
          <div className="message-action-link" onClick={this.handleToggleReply}>Reply</div>
          <div className="message-action-link">Share</div>
          <div className="message-action-link">Report</div>
          <div className="message-action-link" onClick={this.handleDelete}>Delete</div>
          <div className="message-action-link"></div>
        </div>
        {this.renderMessageReply()}
        {this.renderMessageChild()}
      </div>
    )
  }
}

Message.propTypes = {
  content: PropTypes.exact({
    index: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    child: PropTypes.array.isRequired
  }).isRequired,
  methods: PropTypes.exact({
    handleReply: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
  }).isRequired
}

export default Message;
