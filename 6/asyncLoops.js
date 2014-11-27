/**
 * Created by andrew on 26.11.14.
 */

function loadUsers(userIds, load, done){
    var users = [];
    var flag =0;
    userIds.forEach(function(item, index){
        load(item, function(user) {
            users[index] = user;
            if(++flag


                == userIds.length){
                return done(users);
            }
        });
    });

}

module.exports = loadUsers;