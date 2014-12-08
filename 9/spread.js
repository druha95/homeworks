/**
 * Created by andrew on 09.12.14.
 */

var inputs = process.argv.slice(2);
var result = Math.min(...inputs);
console.log(`The minimum of [${inputs}] is ${result}`);