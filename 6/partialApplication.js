/**
 * Created by andrew on 18.11.14.
 */
var slice = Array.prototype.slice;

function logger(namespace){
    return function(text){
        return console.log.apply(null, [namespace].concat(slice.apply(arguments)));
    }
}



module.exports = logger;