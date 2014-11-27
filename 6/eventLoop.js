/**
 * Created by andrew on 26.11.14.
 */

function repeat(operation, num){
    setTimeout(function() {
        if(num <=0) return;
        operation();
        repeat(operation, --num);
    }, 0);
};

module.exports = repeat;