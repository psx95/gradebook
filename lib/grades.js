var gradebook  = {
    _grades : [],
    addGrade : function (newGrade) {
        this._grades.push(newGrade);
    },
    getNumberOfGrades : function () {
        return this._grades.length;
    },
    getAverage : function () {
        var total = 0;
        for (var i = 0; i<this._grades.length;i++) {
            total+=this._grades[i];
        }
        return total/this._grades.length;
    }
};

exports.book = gradebook;