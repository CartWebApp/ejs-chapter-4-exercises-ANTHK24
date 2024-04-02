function deepEqual(a, b) {
  // if a and b are exactly the same, it will return true
  if (a === b) return true;

  // this code checks to see if a is empty/not an object and if none of the conditions of the code get met, it will display false in the console.
  if (a == null || typeof a != "object" ||
    b == null || typeof b != "object") return false;


  // makes two arrays and stores the names of them, a and b respectively
  let keysA = Object.keys(a), keysB = Object.keys(b);

  //checks if the objects in the code provided above are not equal and makes sure both have the same amount of properties available
  if (keysA.length != keysB.length) return false;

  // uses a loop to check if the keys have equality.
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;


  }

  return true;
}






// tests
let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
