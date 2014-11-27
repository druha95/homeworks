/**
 * Created by andrew on 16.11.14.
 */
function repeat(operation, num) {
    if(num<=0){
        return;
    }
    else{
        operation();
        repeat(operation, --num);
    }
}

var test = function test() {
}

var n = 5;

repeat(test, n);

module.exports = repeat;

