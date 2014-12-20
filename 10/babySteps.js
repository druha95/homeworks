/**
 * Created by andrew on 20.12.14.
 */

console.log([].slice.call(process.argv, 2).reduce(function(prev, curr, tmp){
    return Number(prev)+Number(curr);
}));