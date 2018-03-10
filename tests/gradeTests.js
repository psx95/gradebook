var book = require ("../lib/grades").book;

// a way to add something to the exports object
// similar to exports.something excepy we can have white space here
exports["Can add new grade"] = function (test) {
    book.addGrade(90);
    var count = book.getNumberOfGrades();
    test.equal(count,1);
    test.done();
};

exports["Can average Grades"] = function (test) {
    book.addGrade(90);
    book.addGrade(90);
    book.addGrade(90);
    var avg = book.getAverage();
    test.equal(avg,90);
    test.done();
}

exports["Can average negative Grades"] = function (test) {
    book.addGrade (-10);
    book.addGrade (-20);
    book.addGrade (60);
    var avg = book.getAverage();
    test.equal(avg,10);
    test.done();
}