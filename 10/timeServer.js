/**
 * Created by andrew on 20.12.14.
 */

var net = require('net');

var server = net.createServer(function(socket){
    var today = new Date();
    var data  = today.getFullYear();
    data = data + "-"+ (today.getMonth()+1);
    data = data + "-"+ today.getDate();
    data = data + " "+ today.getHours();
    data = data + ":" + today.getMinutes();
    socket.write(data);
    socket.end();
});
server.listen(process.argv[2]);