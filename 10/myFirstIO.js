/**
 * Created by andrew on 20.12.14.
 */

var fs = require('fs');
var buf = fs.readFileSync([].slice.call(process.argv, 2).join(''));
var text = buf.toString();
var arr = text.split('\n');
console.log(arr.length-1);