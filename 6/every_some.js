/**
 * Created by andrew on 17.11.14.
 */
function checkUsersValid(goodUsers){
    return function(submittedUsers){
        return submittedUsers.every(function(item, index, arr){
            return goodUsers.some(function(item2, index2, arr2){
                return item.id == item2.id;
            });
        });
    }
}


module.exports = checkUsersValid;