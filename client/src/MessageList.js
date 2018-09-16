import React from 'react';
// import './MessageList.css';
import Message from './Message';

const testMessage = {
  id: '1',
  author: 'CannedAnchovy',
  time: new Date().toString(),
  text: '(CNN)Two people have been killed by Typhoon Mangkhut, which slammed into the Philippines in the early hours of Saturday, bringing ferocious gale-force winds and pounding rains. Mangkhut was the strongest storm anywhere on the planet in 2018, carrying gusts of up to 325 kilometers per hour (200 mph) before it made landfall in Cagayan province, on the northern tip of Luzon, at about 1:40 a.m. local time. When it crossed land, Mangkhut was packing winds of up to 270 kph (165 mph), 120 kph (75 mph) stronger than Hurricane Florence that hit North Carolina, and aid agencies warn millions are at risk from rising flood waters and landslides. Ricardo Jalad, executive director of the Philippines National Disaster Risk Reduction and Management Council, told CNN that two first-responders were found dead in the Cordillera Administrative Region on the island of Luzon.',
  child: [{
    id: '1-1',
    author: 'Sorethroat',
    time: new Date('1996/06/08').toString(),
    text: 'hi',
    child: [{
      id: '1-1-1',
      author: 'pj',
      time: new Date('2018/09/16 13:35:00').toString(),
      text: 'nice comment',
      child: []
    }]
  }]
};

const MessageList = (props) => {
  props = [testMessage];
  return (
    <div className="message-list">
      {props.map((message)=> (
        <Message key={message.id} content={message} />
      ))}
    </div>
  )
}

export default MessageList;
