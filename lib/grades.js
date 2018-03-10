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
    computeLetterGrade : function () {
        var avg = this.getAverage();
        if (avg >= 90 && avg <= 100) {
            return 'A';
        } else if (avg >=80 && avg < 90){
            return 'B';
        } else if (avg >=70 && avg < 80) {
            return 'C';
        } else if (avg >= 60 & avg < 70) {
            return 'D';
        } else {
            return 'F';
        }
    },
    reset : function () {
        this._grades = [];
    }
};
exports.book = gradebook;