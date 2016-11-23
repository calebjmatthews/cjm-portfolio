"use strict";
var express = require('express');
var path = require('path');
var port = process.env.PORT || 8000;
var app = express();
// app.use('/app', express.static(path.resolve(__dirname, 'app')));
var serveStatic = require('serve-static');
app.use(serveStatic(__dirname, { 'index': ['index.html'] }));
var renderIndex = function (req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'));
};
app.get('/*', renderIndex);
var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});
// var express = require('express');
// var app = express();
// var port: number = process.env.PORT || 8000
// console.log(app);
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
// app.listen(port, function () {
//   console.log('Example app listening on port ' + port );
// }); 
//# sourceMappingURL=server.js.map