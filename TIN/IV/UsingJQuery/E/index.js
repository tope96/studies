$(document).ready(function () {
    class Student {
        constructor(fName, sName, id, grades) {
            this.fName = fName;
            this.sName = sName;
            this.id = id;
            this.grades = grades;
            this.write(); //every time when Student is created, write his info to table
        }

        //counting average grade
        get gradeAVG() {
            if (this.grades.length === 0) {
                return 0;
            } else {
                var text = 0;
                for (var i = 0; i < this.grades.length; i++) {
                    text += parseInt(this.grades[i]);
                }
                return(text / this.grades.length).toFixed(2);
            }
        }

        get getfName() {
            return this.fName;
        }

        get getsName() {
            return this.sName;
        }

        get getId() {
            return this.id;
        }

        //makes string from grades array
        get getGrades() {
            var text = "";
            if (this.grades.length === 0) {
                return "Nie ma żadnych ocen";
            } else {
                for (var i = 0; i < this.grades.length; i++) {
                    text += this.grades[i] + ", ";
                }
            }
            return text;
        }

        //adding grades to array
        addGrades(grade) {
            this.grades.push(grade);
            this.write();
        }

        //write Student's info to table
        write() {
            $("#myTable")[0].rows[1].cells.item(0).innerHTML = this.getfName;
            $("#myTable")[0].rows[1].cells.item(1).innerHTML = this.getsName;
            $("#myTable")[0].rows[1].cells.item(2).innerHTML = this.getId;
            $("#myTable")[0].rows[1].cells.item(3).innerHTML = this.getGrades;
            $("#myTable")[0].rows[1].cells.item(4).innerHTML = this.gradeAVG;
        }
    }

    function create() {
        if (typeof stu == "undefined") {

        } else {
            $("#fName").val(stu.fName);
            $("#sName").val(stu.sName);
            $("#id").val(stu.id);
        }
    }

    //adding grade to Student.
    $("#addGrade").click(function () {
        var formGrade = $("#gradesForm").val();
        if (formGrade >= 1 && formGrade <= 6) { //validating given grade
            stu.addGrades(formGrade);
            $("#gradesForm").val("");
            $("#gradesForm").css('box-shadow', 'none');
        } else {
            alert("Ocena musi być z zakresu 1 do 6!");
            $("#gradesForm").css('box-shadow', "0 0 10px rgba(207, 0, 0)");
        }
    });


    let stu;

    //Creates Student object
    $("#save").click(function () {
        var fName = $("#fName").val();
        var sName = $("#sName").val();
        var id = $("#id").val();

        if (areEmpty() == true) {  //check if Inputs are empty
            empty();
            alert("Uzupełnij wszystkie pola!");
        } else if (typeof stu == "undefined") { //check if Student's object already exists. If no, creates student...
            stu = new Student(fName, sName, id, []);
            create();
            full();
            alert("dodano nowego studenta");
            tableIsVisible();
        } else {
            stu = new Student(fName, sName, id, stu.grades); //...if exists, rewrtie Student's grades
            create();
            full();
            alert("Zmodyfikowano");
            tableIsVisible();
        }
    });

    //check if inputs are empty
    function areEmpty() {
        if ($("#fName").val() == "" || $("#sName").val() == "" || $("#id").val() == "") {
            return true;
        } else {
            return false;
        }
    }

    //check wich inputs are empty and marks those by red border
    function empty() {
        if ($("#fName").val() == "") {
            $("#fName").css('box-shadow', "0 0 10px rgba(207, 0, 0)");
        }
        if ($("#sName").val() == "") {
            $("#sName").css('box-shadow', "0 0 10px rgba(207, 0, 0)");
        }
        if ($("#id").val() == "") {
            $("#id").css('box-shadow', "0 0 10px rgba(207, 0, 0)");
        }
    }

    //make inputs look normal, because they passed validation
    function full() {
        $("#fName, #sName, #id").css('box-shadow', 'none');
    }

    //check if table is visible. If no, make it visible.
    function tableIsVisible() {
        if ($("#myTable, #gra").visibility == "visible") {
        } else {
            $("#myTable, #gra").css('visibility', 'visible');
        }
    }

    create();
});