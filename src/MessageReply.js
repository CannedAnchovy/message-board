import React, {Component} from 'react';
import './MessageReply.css';

class MessageReply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    }

    this.cancel = React.createRef();
    this.reply = React.createRef();

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleFocus() {
    this.reply.current.classList.add('message-reply-action-button-focus');
    if(this.cancel.current) this.cancel.current.classList.add('message-reply-action-button-focus');
    this.setState({focus: true});
  }

  handleBlur() {
    this.reply.current.classList.remove('message-reply-action-button-focus');
    if(this.cancel.current) this.cancel.current.classList.remove('message-reply-action-button-focus');
    this.setState({focus: false});
  }

  render() {
    if(!this.props.reply) return <div></div>;

    return (
      <div className="message-reply">
        <textarea
          rows="5"
          placeholder="What are your thoughts?"
          className={`message-reply-input`}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        >
        </textarea>
        <div className="message-reply-action">
          <div className="message-reply-action-button" ref={this.reply}>Reply</div>
          {(this.props.noCancel)? <div></div> : <div
            className="message-reply-action-button"
            ref={this.cancel}
            onClick={this.props.onCancel}
          >Cancel</div>}
        </div>
      </div>
    );
  }
}

export default MessageReply;
