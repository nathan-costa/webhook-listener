var express = require('express');
var app = express();
var execSync = require('exec-sync');
var yaml_config = require('node-yaml-config');
var config = yaml_config.load(__dirname + '/config.yml');

app.post(config.webhook.url, function (req, res) {
    result = execSync(config.command);
    console.log(result);
});

var server = app.listen(config.server.port, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
