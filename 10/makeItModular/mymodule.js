/**
 * Created by andrew on 20.12.14.
 */
module.exports = function(dirname, filter, callback){
    var fs = require('fs');
    fs.readdir(dirname, function(err, data){
        if(err) return callback(err);

        var result = data.filter(function(item){
            return item.split('.')[1] == filter;
        });
        return callback(null, result);
    });
};