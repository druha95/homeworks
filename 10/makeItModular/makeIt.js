/**
 * Created by andrew on 20.12.14.
 */

var myModule = require('./mymodule.js');

myModule(process.argv[2], process.argv[3], function(err, data){
    if(err) throw err;
    console.log(data.join('\n'));
});