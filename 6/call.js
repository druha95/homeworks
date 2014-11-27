/**
 * Created by andrew on 17.11.14.
 */


function duckCount() {
    return Array.prototype.slice.call(arguments).filter(function(curr){
        return Object.prototype.hasOwnProperty.call(curr, 'quack');
    }).length;
}

module.exports = duckCount;