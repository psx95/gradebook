var book = require("./lib/grades").book;
var express = require("express");
var app = express();
app.get("/", function (req,res){
    res.send("Hello World !");
});
app.get("/grade", function (req, res){
    var grades = req.query.grades.split(",");
    for (var i = 0; i<grades.length; i++) {
        book.addGrade(parseInt(grades[i]));
    }
    var avg = book.getAverage();
    var letter = book.computeLetterGrade();
    res.send("Your average is "+avg+ " grade is "+letter);
})
app.listen (3000);
console.log ("Server Ready...");