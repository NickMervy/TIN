class Person {
  constructor(fisrt, last) {
    this.first = fisrt;
    this.last = last;
  }

  get fullName() {
    return this.first + ' ' + this.last;
  }

  set fullName(fullName) {
    [this.first, this.last] = fullName.split(" ");
  }
}

class Student extends Person {
  constructor(first, last, grades, id, courses) {
  	super(first, last);
    
    this.grades = grades;
    this.id = id;
    this.courses = courses;
  }

  average() {
    let sum = 0;
    for (let i = 0; i < this.grades.length; ++i) {
      sum += this.grades[i]
    }
    return sum / this.grades.length;
  }
}


let s1 = new Student('A', 'B', [1, 2, 3, 4, 5], 20324, ['A', 'B']);
let s2 = new Student('B', 'B', [2, 3, 5, 5, 5], 32134, ['C', 'D']);

console.log(s1.fullName);
s1.fullName = 'ARa Arra';
console.log(s1.fullName);
console.log(s1.first);
console.log(s1.last);

console.log(s2.courses);
console.log('Average ' + s1.average());
console.log('Average ' + s2.average());
