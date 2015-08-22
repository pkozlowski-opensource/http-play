var http = require('http');
var connect = require('connect');
var serveStatic = require('serve-static');
var open = require('open');

var httpPlay = function httpPlay(options, cb) {
    options = options || {};

    var port = options.port || 9000;
    var distDir = options.dist || 'dist';
    var openInBrowser = options.open != 'false';

    var app = connect().use(serveStatic(distDir));  // serve everything that is static
    http.createServer(app).listen(port, function (err) {
        if (err && cb) {
            cb(err);
        }

        if (openInBrowser) {
            open('http://localhost:' + port, cb);
        }
    });
};

module.exports = httpPlay;
