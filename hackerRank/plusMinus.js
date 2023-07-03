/*
PROMPT: 
Given an array of integers, calculate the ratios of its elements 
that are positive, negative, and zero. Print the decimal value of 
each fraction on a new line with 6 places after the decimal.

APPROACH:
   - variables positive, negative & zero
   - for loop 
   - increment each value accordingly
 
  console.log((variables / arr.length).toFixed(6))

*/
// Time: O(n) || O(1)
function plusMinus(arr) {
    let positives = 0;
    let negatives = 0;
    let zeros = 0;
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 0) {
            zeros ++;
        }
        else if (arr[i] > 0) {
            positives++;
        }
        else if (arr[i] < 0) {
            negatives++;
        }
    }
    console.log((positives/arr.length).toFixed(6))
    console.log((negatives/arr.length).toFixed(6))
    console.log((zeros/arr.length).toFixed(6))

}
