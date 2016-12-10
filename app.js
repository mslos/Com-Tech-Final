var express = require('express');
var Request = require('request');
var bodyParser = require('body-parser');

var app = express();

// Set up the public directory to serve our Javascript file
app.use(express.static(__dirname + '/assets', { redirect: false }));
app.use(express.static(__dirname + '/images', { redirect: false }));

// Set EJS as templating language
app.set('views', __dirname + '/views');
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

// Enable json body parsing of application/json
app.use(bodyParser.json());

// Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//******* ROUTES *******
// GET - route to load the main page
app.get("/", function (request, response) {
	console.log("In main route");
	response.render('index');
});

// GET - Catch All route
app.get("*", function(request,response){
	response.redirect("/");
	// response.send("Sorry. Nothing lives here.");
});


var port = process.env.PORT || 3000; 
app.listen(port);
console.log('Express started on port ' + port);
