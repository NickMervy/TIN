function Student(first, last, id, grades) {
  this.firstName = first;
  this.lastName = last;
  this.id = id;
  this.grades = grades;
  
  this.printInfo = function() {
    console.log(first);
    console.log(last);
    console.log(id);
    console.log(grades);
    
    let sum = 0;
    for( var i = 0; i < grades.length; i++ ){
        sum += grades[i];
    }

		let avg = sum/grades.length;
    console.log("Average: " + avg);
  }
}

const student1 = new Student("John1", "Doe1", 1, [5,5,5,5]);
const student2 = new Student("John2", "Doe2", 2, [3,4,2,5]);

student1.printInfo();
student2.printInfo();