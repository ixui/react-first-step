var express = require('express');
var http = require('http');
var ECT = require('ect');

var app = express();

// 静的ファイルの設定
app.use(express.static(__dirname + '/public'));
// Template engineの設定
app.engine('ect', ECT({ watch: true, root: __dirname + '/views', ext: '.ect' }).render);
app.set('view engine', 'ect');

app.get('/*', function(req, res){
  res.render('app');
});

// サーバの起動
var port = process.env.PORT || 1337;
var httpServer = http.createServer(app);
httpServer.listen(port, function() {
  console.log('running on port ' + port + '.');
});
