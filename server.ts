// import express = require('express');
// import path = require('path');
// var port: number = process.env.PORT || 8000;
// var app = express();

// app.use('/app', express.static(path.resolve(__dirname, 'app')));

// // var renderIndex = (req: express.Request, res: express.Response) => {
// //     res.sendFile(path.resolve(__dirname, 'index.html'));
// // }
// // 
// // app.get('/*', renderIndex);

// var serveStatic = require('serve-static');
// app.use(serveStatic(__dirname, { 'index': ['index.html'] }));

// var server = app.listen(port, function() {
//   var host = server.address().address;
//   var port = server.address().port;
//   console.log('This express app is listening on port:' + port);
// });

var express = require('express');
var app = express();

console.log(app);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var port: number = process.env.PORT || 8000
app.listen(port, function () {
  console.log('Example app listening on port ' + port );
});