import express = require('express');
import path = require('path');
var port: number = process.env.PORT || 5000;
var app = express();

app.use('/app', express.static(path.resolve(__dirname, 'app')));

// var renderIndex = (req: express.Request, res: express.Response) => {
//     res.sendFile(path.resolve(__dirname, 'index.html'));
// }
// 
// app.get('/*', renderIndex);

var serveStatic = require('serve-static');
app.use(serveStatic(__dirname, { 'index': ['index.html'] }));

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});