var express = require('express');
var app = express();
var exec = require('child_process').exec;
var yaml_config = require('node-yaml-config');
var config = yaml_config.load(__dirname + '/config.yml');

app.post(config.webhook.url, function (req, res) {
    function puts(error, stdout, stderr) {sys.puts(stdout)}
    exec(config.command, puts);
});

var server = app.listen(config.server.port, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
