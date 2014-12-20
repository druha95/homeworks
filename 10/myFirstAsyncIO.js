/**
 * Created by andrew on 20.12.14.
 */

var fs = require('fs');
fs.readFile(process.argv[2], function(err, data){
    if(err) throw err;
    console.log(data.toString().split('\n').length-1);
});

