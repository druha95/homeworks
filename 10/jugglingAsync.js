/**
 * Created by andrew on 20.12.14.
 */
var http = require('http');
var bl = require('bl');
var result = [];
var count =0;

function printText(result){
    for(var i =0; i<result.length; i++){
        console.log(result[i]);
    }
}


function Loop(i){
    http.get(process.argv[i], function(res){
        res.pipe(bl(function(err, data){
            if(err) return console.error(err);


            result[i-2] = data.toString();
            count++;

            if(count == 3){
                printText(result);
            }
        }));
    });
}

for(var i=2; i<5; i++){
    Loop(i);
}
