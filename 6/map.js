/**
 * Created by andrew on 17.11.14.
 */

function doubleAll(numbers) {
    var result = numbers.map(function(item){
        return item *2;
    });
    return result;
}

module.exports = doubleAll;