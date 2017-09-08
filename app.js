var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var useragent = require('express-useragent')
var app = module.exports = express();
//importing the libraries 

app.use(bodyParser.json());//take the app and 
//tell it to use to libraries.
app.use(cors());
app.use(useragent.express());
//app.set('port', (process.env.PORT || 3000));


//app.use(express.static(__dirname + '/public'));

// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');


//storing api's in variables 
var api = '/api/whoami';

app.get(api, function(req, res, next){
   var language = req.acceptsLanguages();
   var software = req.useragent.os + ', Browser: ' + req.useragent.browser;
   var ipaddress = req.ip;

   res.json({'ipaddress': ipaddress , 'language':language[1], 'software':software});
});
if(!module.parent){
    app.listen(2999);
}
app.listen(3000, function(){//listen on port 3000
    console.log('Working');
   
});
//nodemon auto saves and updates
//take software and concatanate a nice string 