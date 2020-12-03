var express = require("express"),
	app = express();

app.set("view engine", "ejs");

app.get("/", function(req,res){
	res.render("home");
});

app.get("/about", function(req,res){
	res.render("about");
});

app.get("/thestars", function(req,res){
	res.render("thestars");
});

const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, function(){
	console.log("Server started..." + port);
});