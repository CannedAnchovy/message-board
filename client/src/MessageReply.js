import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './MessageReply.css';

class MessageReply extends Component {
  constructor(props) {
    super(props);

    this.cancel = React.createRef();
    this.reply = React.createRef();
    this.input = React.createRef();

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmitReply = this.handleSubmitReply.bind(this);
  }

  handleFocus() {
    this.reply.current.classList.add('message-reply-action-button-focus');
    if(this.cancel.current) this.cancel.current.classList.add('message-reply-action-button-focus');
  }

  handleBlur() {
    this.reply.current.classList.remove('message-reply-action-button-focus');
    if(this.cancel.current) this.cancel.current.classList.remove('message-reply-action-button-focus');
  }

  handleSubmitReply() {
    this.props.handleReply({
      author: 'visitor',
      time: new Date(),
      text: this.input.current.value.trim(),
    });
    if (this.cancel.current !== null) this.cancel.current.click();
    else this.input.current.value = '';
  }

  render() {
    return (
      <div className="message-reply">
        <textarea
          rows="5"
          placeholder="What are your thoughts?"
          className="message-reply-input"
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          ref={this.input}
        >
        </textarea>
        <div className="message-reply-action">
          <div
            className="message-reply-action-button"
            ref={this.reply}
            onClick={this.handleSubmitReply}
          >Reply</div>
          {(this.props.noCancel)? <div></div> : <div
            className="message-reply-action-button"
            ref={this.cancel}
            onClick={this.props.handleCloseReply}
          >Cancel</div>}
        </div>
      </div>
    );
  }
}

MessageReply.propTypes = {
  noCancel: PropTypes.bool.isRequired,
  handleReply: PropTypes.func.isRequired,
  handleCloseReply: PropTypes.func
}


export default MessageReply;
