var book = require ("../lib/grades").book;

exports.setUp = function (callback) {
    book.reset();
    callback();
};
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

exports["Can Compute Letter A as Grade"] = function (test) {
    book.addGrade(90);
    book.addGrade(100);
    book.addGrade(95);
    var grade = book.computeLetterGrade();
    test.equal (grade,'A');
    test.done();
}

exports["Can Compute Letter B as Grade"] = function (test) {
    book.addGrade(80);
    book.addGrade(65);
    book.addGrade(90);
    var grade = book.computeLetterGrade();
    test.equal (grade, 'C');
    test.done ();
}

exports["Can Compute Fail"] = function (test) {
    book.addGrade(60);
    book.addGrade(59);
    var grade = book.computeLetterGrade();
    test.equal (grade, 'F');
    test.done();
}