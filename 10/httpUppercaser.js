/**
 * Created by andrew on 20.12.14.
 */

var http = require('http');
var map = require('through2-map')

http.createServer(function(req, res){
    req.pipe(map(function(item){
        return item.toString().toUpperCase();
    })).pipe(res);

}).listen(process.argv[2]);