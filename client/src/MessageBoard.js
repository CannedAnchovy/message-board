import React, { Component } from 'react';
import 'babel-polyfill';
import fetch from 'isomorphic-fetch';
import MessageList from './MessageList';
import MessageReply from './MessageReply';
import './MessageBoard.css'

class MessageBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageList: []
    };

    this.appendMessage = this.appendMessage.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
  }

  checkHttpStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }

  fetchMessageList() {
    fetch('/api/comments')
      .then(this.checkHttpStatus)
      .then(res => res.json())
      .then(data => {
        console.log('request succeed', data);
        this.setState({messageList: data.messageList})
      })
      .catch(error => {
        console.log('request failed', error);
      })
  }

  appendMessage(index, message) {
    console.log('index: ' + index);
    console.log('message: ' + JSON.stringify(message));
    fetch('/api/comments', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        action: 'append',
        payload: {
          index: index,
          message: message
        }
      })
    })
      .then((res) => {
        console.log(res);
        return res;
      })
      .then(this.checkHttpStatus)
      .then(response => response.json())
      .then(data => {
        console.log('request succeed', data);
        this.setState({messageList: data.messageList})
      })
      .catch(error => {
        console.log('request failed', error);
      })
  }

  deleteMessage(index) {
    console.log('index: ' + index);
    fetch('/api/comments', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        action: 'delete',
        payload: {
          index: index,
        }
      })
    })
      .then((res) => {
        console.log(res);
        return res;
      })
      .then(this.checkHttpStatus)
      .then(response => response.json())
      .then(data => {
        console.log('request succeed', data);
        this.setState({messageList: data.messageList})
      })
      .catch(error => {
        console.log('request failed', error);
      })
  }

  componentDidMount() {
    this.fetchMessageList();
  }

  componentDidUpdate() {
    console.log('current state: ', this.state);
  }

  render() {
    return (
      <div className="message-board">
        <MessageReply noCancel={true} handleReply={(message) => {this.appendMessage('', message)}}/>
        <MessageList data={this.state.messageList} methods={{handleReply: this.appendMessage, handleDelete: this.deleteMessage}}/>
      </div>
    );
  }
}

export default MessageBoard;
