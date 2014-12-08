/**
 * Created by andrew on 09.12.14.
 */

var input = process.argv.slice(2);
var result = input.map(item => item[0]).reduce((prev, curr) => prev+curr);
console.log(`[${input}] becomes "${result}"`);

