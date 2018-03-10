var book = require("./lib/grades").book;
// starts at i = 2 since the first parameter is a string 'node' and the second argument is the name of the file including the file path
for (var i = 2; i < process.argv.length; i++) {
    book.addGrade (parseInt(process.argv[i]));
}
console.log(book.getAverage());