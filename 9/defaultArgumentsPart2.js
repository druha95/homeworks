/**
 * Created by andrew on 09.12.14.
 */

module.exports = function makeImportant(str, count=str.length){
    return `${str}${"!".repeat(count)}`;
}