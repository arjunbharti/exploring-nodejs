const express = require("express");

const bodyParser = require("body-parser");

const app = express();
//body parser
//using urlencoded we can get form data
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get("/", function(request, response){  //callback
  response.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The result is : " + result);
});

app.get("/bmiCalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight/(height*height);
  res.send("Your BMI is : " + bmi);
});

//another route
// app.get("/contact", function(req, res){
//   res.send("Contact me at arjun@test.com");
// });

//another route
// app.get("/about", function(req, res){
//   res.send("My name is Arjun and I am full stack web developer and mobile apps developer");
// });
//
// app.get("/hobbies", function(req, res){
//   res.send("I have a lot of hobbies");
// });
//
app.listen(3000, function(){
  console.log("Server has started at port 3000");
});
