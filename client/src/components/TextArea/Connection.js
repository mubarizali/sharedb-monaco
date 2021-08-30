import ReconnectingWebSocket from 'reconnecting-websocket';

var sharedb = require('sharedb/lib/client');

var socket = new ReconnectingWebSocket("ws://localhost:8080");
var connection = new sharedb.Connection(socket);

export default connection;