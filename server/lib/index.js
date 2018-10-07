'use strict';

var _route = require('./route');

var _route2 = _interopRequireDefault(_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.PORT || 3001;

_route2.default.listen(PORT, function () {
  console.log('Message-board-backend is listening on port ' + PORT + '!');
});