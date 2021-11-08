const myObj = { 
	a: 'foo', 
  b: 42, 
  c:  4.5,
  
  m1: function f1() {
    return b + c;
  },
  
  m2: function f2() {
  	return "f2";
  }
  };

let final = (myObj) => {
	console.log(myObj.a + " - " + typeof myObj.a);
  console.log(myObj.b + " - " + typeof myObj.b);
	console.log(myObj.c + " - " + typeof myObj.c);
};

console.log(final(myObj));