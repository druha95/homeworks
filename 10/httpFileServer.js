/**
 * Created by andrew on 20.12.14.
 */

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
   var fileStream = fs.createReadStream(process.argv[3].toString());
   fileStream.pipe(res);
}).listen(process.argv[2]);