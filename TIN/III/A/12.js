const Student = function(fName, sName, index, grades){
    this.fName = fName;
    this.sName = sName;
    this.index = index;

    this.getFname = function () {
        return this.fName;
    }

    this.getSname = function(){
        return this.sName;
    }

    this.getAvg = function(){
        var sum = 0;
        for(var i = 0; i < grades.length; i++){
            sum += grades[i];
        }
        return sum/grades.length;
    }

}

var jan = new Student('Jan', 'Kowalski', '121212', [1, 2, 3, 4, 5]);
console.log(jan.getFname());
console.log(jan.getSname());
console.log(jan.getAvg());
