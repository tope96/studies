var HttpDispatcher = require('httpdispatcher');
var http           = require('http');
var dispatcher     = new HttpDispatcher();
var url = require('url');

dispatcher.onGet("/add", function(req, res) {
    res.writeHead(200, { "Content-type": "text/html" });
    var a = url.parse(req.url, true).query.a; 
    var b = url.parse(req.url, true).query.b;
    res.end("<b>Wynik dzialania:</b> " + a + "+" + b + "=" + (parseInt(a) + parseInt(b)));
}); 

dispatcher.onGet("/sub", function(req, res){
    res.writeHead(200, { "Content-type": "text/html" });
    var a = url.parse(req.url, true).query.a;
    var b = url.parse(req.url, true).query.b;
    res.end("<b>Wynik dzialania:</b> " + a + "-" + b + "=" + (parseInt(a) - parseInt(b)));
});

dispatcher.onGet("/mul", function(req, res){
    res.writeHead(200, { "Content-type": "text/html" });
    var a = url.parse(req.url, true).query.a;
    var b = url.parse(req.url, true).query.b;
    res.end("<b>Wynik dzialania:</b> " + a + "*" + b + "=" + (parseInt(a) * parseInt(b)));
});

dispatcher.onGet("/div", function(req, res){
    res.writeHead(200, { "Content-type": "text/plain" });
    var a = url.parse(req.url, true).query.a; 
    var b = url.parse(req.url, true).query.b;
    res.end("Wynik dzialania: " + a + "/" + b + "=" + (parseInt(a) / parseInt(b)));
});


dispatcher.onError(function(req, res) {
    res.writeHead(404);
    res.end("Wystąpił błąd 404 :(");
});

http.createServer(function (req, res) {
    var a = url.parse(req.url, true).query.a; //get first parameter
    var b = url.parse(req.url, true).query.b;

    if(a == null || b==null || !parseInt(a) || !parseInt(b)){
        res.writeHead(400, { "Content-type": "text/html" });
        res.end('Wprowadzono niepoprawne parametry! Prawidlowa sciezka wyglada tak: http://127.0.0.1:8000/add?a=1&b=2 w przypadku dodawania.');
      }else{
         dispatcher.dispatch(req, res); 
      }
}).listen(8000, '127.0.0.1');
