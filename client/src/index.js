import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MessageBoard from './MessageBoard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MessageBoard />, document.getElementById('root'));
registerServiceWorker();
