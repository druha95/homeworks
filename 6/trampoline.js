/**
 * Created by andrew on 26.11.14.
 */

function repeat(operation, num) {
    return function() {
        if (num <= 0) return;
        operation();
        return repeat.bind(null, operation, --num);
    }
}

function trampoline(fn){
    while (fn && fn instanceof Function) {
        fn = fn.apply(fn.context, fn.args);
    }
    return fn;
}

module.exports = function(operation, num){
    return trampoline(repeat.bind(null, operation, num));
};

