function Student(subjects){
  this.subjects = subjects;
}

var student = new Student(subjects);

function createStudent(name, sName, index){
  const newStudent = Object.create(student);
  newStudent.name = name;
  newStudent.sName = sName;
  newStudent.index = index;

  console.log('You just created student: \n' +
                'Name: ' + name + ', \n' +  
                'Second name: ' + sName + ', \n' +
                'Index: ' + index);
}

var subjects = ['IT', 'Art'];
createStudent('Jan', 'Kowalski', 1234);
