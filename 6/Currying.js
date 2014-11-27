/**
 * Created by andrew on 27.11.14.
 */

function carryN(fn, n){
    if(!n) n = fn.length;
    return function(argum){
        if(n==1){
            return fn.apply(this, arguments);
        }
        else{
            n--;
            return carryN(fn.bind(this, argum), n)
        }
    }
}

module.exports = carryN;