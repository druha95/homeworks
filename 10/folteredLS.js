/**
 * Created by andrew on 20.12.14.
 */

var fs = require('fs');

fs.readdir(process.argv[2], function(err, data){
    if(err) throw err;
    var result = data.filter(function(item){
        return item.split('.')[1] == process.argv[3];
    });
    result.forEach(function(item){
        console.log(item);
    });
});