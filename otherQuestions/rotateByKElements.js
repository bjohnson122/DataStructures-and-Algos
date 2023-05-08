/*
PROMPT:
 Write a function that rotates a list by k elements.
 For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]. 
 Try solving this without creating a copy of the list. 
 How many swap or move operations do you need?
*/

// WITHOUT MAKING A COPY -- Big O: __? -- Second Solution
function rotateList(arr, k) {
  if (k % arr.length == 0) {
    return arr;
  } else if (k > arr.length) {
    k = k % arr.length;
  }
  let i = 0;
  while (i < k) {
    let movedElement = arr.shift();
    arr.push(movedElement);
    i++;
  }
  return arr;
}
console.log(rotateList([1, 2, 3, 4, 5, 6], 2)); // [3, 4, 5, 6, 1, 2]

// Shallow Copy -- Big O:__? -- First Solution
function rotateList(arr, k) {
  // ESTABLISHING K
  if (k % arr.length == 0) {
    // if K is COMPLETELY divisible by arr.length
    return arr; // We simply return the array (because it would wrap onto itself)
  } else if (k > arr.length) {
    // if K > length of the array,
    k = k % arr.length; // we just need the remainder
  }
  const endingArr = arr.slice(0, k); //create a copy of the values we NEED from the original arr [1,2]
  const beginningArr = arr.slice(k); // [3, 4, 5, 6]

  return [...beginningArr, ...endingArr]; // [3, 4, 5, 6, 1, 2] -->
}
console.log(rotateList([1, 2, 3, 4, 5, 6], 2)); // [3, 4, 5, 6, 1, 2]
