/**
 * Created by andrew on 26.11.14.
 */

module.exports = function arrayMap(arr, fn){
    var result =[];
    var count = 0;
    var flag = true;
    arr.reduce(function(item, curr){
        if(flag === true){
            flag = false;
            result[count++] = fn(item);
            return result[count++] = fn(curr);
        }
        else{
            return result[count++] = fn(curr);
        }
    });
    return result;
};

