function reverseArray(arr) {
  let output = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    output.push(arr[i]);
  }
  return output;
}

function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let old = arr[i];
    arr[i] = arr[arr.length - 1 - i] = old;
  }
  return arr;
}






// tests 
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]