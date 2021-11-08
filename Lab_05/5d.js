const student = {
  firstName: 'asd',
  lastName: 'asd',
  grades: [1, 2, 3, 4, 5],
  id: 1,
  courses: ['A', 'B'],

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
  set fullName(fullName) {
    [this.firstName, this.lastName] = fullName.split(" ");
  },
  average: function() {
  	let sum = 0;
    for (let i = 0; i < this.grades.length; ++i) {
      sum += this.grades[i]
    }
    return sum / this.grades.length;
  }
};

function createS(first, last, id, grades) {
  let obj = Object.create(student);
  obj.firstName = first;
  obj.lastName = last;
  obj.id = id;
  obj.grades = grades;

  return obj;
};

let s1 = createS('A', 'B', 1, [1, 2, 3, 4, 5]);
let s2 = createS('B', 'B', 2, [2, 3, 5, 5, 5]);

console.log(s1.fullName);
s1.fullName = 'ARa Arra';
console.log(s1.fullName);
console.log(s2.courses);
console.log('Average: ' + s1.average());
console.log('Average: ' + s2.average());