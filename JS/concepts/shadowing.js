let a = 10;

function example() {
  let a = 20; // shadows outer 'a'
  console.log(a); // 20
}

example();
console.log(a); // 10



// __________________________________


// illegal :

var x = 10;

{
  let x = 20; // ✅ allowed – block scoped doesn't interfere with var
  console.log(x); // 20
}

// ----------------------------------


// let y = 10;

// {
//   var y = 20; // ❌ Illegal Shadowing: var can't redeclare let from outer scope
//   console.log(y);
// }
