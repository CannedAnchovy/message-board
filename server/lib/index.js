'use strict';

var _route = require('./route');

var _route2 = _interopRequireDefault(_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var testMessage = {
  index: '0',
  author: 'CannedAnchovy',
  time: new Date().toString(),
  text: '(CNN)Two people have been killed by Typhoon Mangkhut, which slammed into the Philippines in the early hours of Saturday, bringing ferocious gale-force winds and pounding rains. Mangkhut was the strongest storm anywhere on the planet in 2018, carrying gusts of up to 325 kilometers per hour (200 mph) before it made landfall in Cagayan province, on the northern tip of Luzon, at about 1:40 a.m. local time. When it crossed land, Mangkhut was packing winds of up to 270 kph (165 mph), 120 kph (75 mph) stronger than Hurricane Florence that hit North Carolina, and aid agencies warn millions are at risk from rising flood waters and landslides. Ricardo Jalad, executive director of the Philippines National Disaster Risk Reduction and Management Council, told CNN that two first-responders were found dead in the Cordillera Administrative Region on the island of Luzon.',
  child: [{
    index: '0-0',
    author: 'Sorethroat',
    time: new Date('1996/06/08').toString(),
    text: 'hi',
    child: [{
      index: '0-0-0',
      author: 'pj',
      time: new Date('2018/09/16 13:35:00').toString(),
      text: 'nice comment',
      child: []
    }]
  }]
};

var data = {
  messageList: [testMessage]
};

_route2.default.listen(3001, function () {
  console.log('Message-board-backend is listening on port 3001!');
});