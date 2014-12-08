/**
 * Created by andrew on 09.12.14.
 */

module.exports = function average(...arg){
    var total = 0;
    arg.forEach(value => total+=value);
    return total/arg.length;
}