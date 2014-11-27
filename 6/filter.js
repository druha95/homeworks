/**
 * Created by andrew on 17.11.14.
 */
function getShortMessages(array) {
    var result = [];

    result = array.filter(function(item) {
        return item.message.length < 50;
    });
    result = result.map(function(item){
        return item.message;
    });
    return result;
}


module.exports = getShortMessages;