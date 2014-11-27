/**
 * Created by andrew on 17.11.14.
 */
function reduce(arr, fn, initial){
   if(!arr.length) return initial;
    var prev = initial;
    var curr = arr[0];
    return reduce(arr.slice(1), fn, fn(prev, curr));
}

module.exports = reduce;
