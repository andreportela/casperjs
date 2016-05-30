var server = require('webserver').create();
var casper = require('casper').create();
var ip_server = '127.0.0.1:8585';
casper.start().then(function(){});
var service = server.listen(ip_server, function(request, response) {
    var payload = request;
    console.log("request: ");
    require('utils').dump(payload);//dump the whole request on console, you should expect custom headers to appear here
    casper.run(function() {
        response.statusCode = 200;
        response.write(JSON.stringify(payload));
        console.log("response: ");
        require('utils').dump(response);
        response.close();
    });
});
console.log('Server running at http://' + ip_server+'/');