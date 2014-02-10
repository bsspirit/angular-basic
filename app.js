var express = require('express')
    , path = require('path')
    , ejs = require('ejs')
    , app = express()
    , server = require('http').createServer(app);

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.engine('.html', ejs.__express);
app.set('view engine', 'html'); //修改文件扩展名ejs为html
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'app')));

if (app.get('env') === 'development') {
    app.use(express.errorHandler());
}

// angular启动页
app.get('/', function (req, res) {
    res.sendfile('app/index.html');
});

server.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

