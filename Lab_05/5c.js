const student = {
	firstName: 'asd',
  lastName: 'asd',
  id: 1,
  courses: ['A', 'B']
  };

function createS(first, last, id) {
  let obj = Object.create(student);
  obj.firstName = first;
  obj.lastName = last;
  obj.id = id;

  return obj;
};

let s1 = createS('A', 'B', 1);
let s2 = createS('B', 'B', 2);

console.log(s1.firstName);
console.log(s2.courses);