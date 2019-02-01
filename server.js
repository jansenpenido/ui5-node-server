// Standard set up for the express code to work with your code
var express = require('express');
var path = require('path');
var http = require('http');

// Create server
var router = express();
var server = http.createServer(router);

// Define path to home directory
router.use(express.static(path.resolve(__dirname, 'webapp')));

// Start the app
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
