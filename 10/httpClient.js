/**
 * Created by andrew on 20.12.14.
 */

var http = require('http');

http.get(process.argv[2], function(res){
    res.setEncoding('utf-8')
    res.on('data', function(data){
        console.log(data);
    });
}).on('error', function(err){
    console.log("lala" + err);
});