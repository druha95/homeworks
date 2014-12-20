/**
 * Created by andrew on 20.12.14.
 */

var bl = require('bl');
var http = require('http');


//
//http.get(process.argv[2], function(res){
//    var str = '';
//
//    res.setEncoding('utf-8');
//    res.on('data', function(data){
//        str += data;
//    });
//    res.on('error', function(err){
//        console.log(err);
//    });
//    res.on('end', function(){
//        console.log(str.length);
//        console.log(str);
//
//    });
//});

http.get(process.argv[2], function(res){
    res.pipe(bl(function(err, data){
        if(err) return console.error(err);
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
});
