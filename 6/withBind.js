/**
 * Created by andrew on 18.11.14.
 */

//var slice = Array.prototype.slice;

module.exports = function(namespace){
    return function(){
        return console.log.bind(null, [namespace].concat([].slice.apply(arguments)).join(" "))();
    };
};