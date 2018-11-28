$(document).ready(function(){
    class Student {
        constructor(fName, sName, id, grades) {
            this.type = "student";
            this.fName = fName;
            this.sName = sName;
            this.id = id;
            this.grades = grades;
        }

        gradeAVG() {
            var avg = 0;
            for (var i = 0; i < this.grades.length; i++) {
                avg += this.grades[i];
            }
            return avg / this.grades.length;
        }
    }

    var stu = new Student('Tomek', 'Pietrzak', 123, [1, 2, 3, 4, 5]);

    console.log(stu.gradeAVG());

})