var casper = require('casper').create({verbose: true,logLevel: "debug"});
var data, wsurl = 'http://127.0.0.1:8585';

casper.start().then(function() {
    data = this.evaluate(function(wsurl) {
    var customData = {"requestData":"dummydata"};
    var customSettings = {
            headers:{
                "Accept": "*/*",
                "Accept-Language": "pt-BR,en,*",
                "Content-Type": "multipart/form-data",
                "Host" : "192.168.0.2:8584",
                "Origin": "http://google.com",
                "User-Agent": "Googlebot/2.1 (+http://www.google.com/bot.html)" //this strangely doesn't set the given header
            }
        };
        return __utils__.sendAJAX(wsurl, 'POST', customData, false, customSettings);
    }, {wsurl: wsurl});
}).run();