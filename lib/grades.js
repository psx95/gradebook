var gradebook  = {
    _grades : [],
    addGrade : function (newGrade) {
        this._grades.push(newGrade);
    },
    getNumberOfGrades : function () {
        return this._grades.length;
    },
    getTotal : function () {
        var total = 0;
        for (var i = 0; i<this._grades.length; i++) {
            total+=this._grades[i];
        }
        return total;
    },
    getAverage : function () {
        return this.getTotal()/this._grades.length;
    },
    reset : function () {
        this._grades = [];
    }
};
exports.book = gradebook;