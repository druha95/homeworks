/**
 * Created by andrew on 17.11.14.
 */


function countWord(inputWords){
        var obj = {};
        inputWords.reduce(function(previousValue, currentValue, index){
            return obj[currentValue] == null ? obj[currentValue]=1 : obj[currentValue]++;
        }, 0);
        return obj;
}

module.exports = countWord;