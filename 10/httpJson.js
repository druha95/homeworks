/**
 * Created by andrew on 20.12.14.
 */

var http = require('http');
var url = require('url');

function parseTime(time){
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    };
}

function unixtime(time){
    return {
        unixtime: time.getTime()
    };
}

http.createServer(function(req, res){
    var parseUrl =  url.parse(req.url, true);
    var time = new Date(parseUrl.query.iso);
    var result;
    if (/^\/api\/parsetime/.test(req.url))
        result = parseTime(time, res);
    else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time, res);
    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify(result))
    }
    res.writeHead(404);
    res.end();
}).listen(process.argv[2]);