/*
PROMPT:
    Given an array of positive integers that represents the duration 
    of a query that needs to be executed, determine the total waiting time.
    Only one query can be executed at a time, but the queries can be executed
    in any order. Write a function that is going to return the minimum amount
    of total waiting time for all the queries. 
    Note: You are allowed to mutate the input array.

EXPECTED INPUT: array of (positive) integers 
EXPECTED OUTPUT: number (integer)

APPROACH #1:
    - sort the input array of queries *.sort() = O(nlogn) time
    - create a duration variable, initialize it to 0
    - create a TOTAL TIMES variable to hold the times for each duration (also initialized to 0)
    - if the input array's length is >=2:
        - for loop starting at idx # 1
            - add the input array @ [i-1] to the duration variable,
            - add the duration to the totalTime variable 
        - return totalTime
    - otherwise return 0. (If there's only one element in the array, 
      there isn't anything to "wait" for since it's at the beginning... it's the first in "line")

*/

// Time: O(nlogn) || Space: O(1)

function minimumWaitingTime(queries) {
  queries = queries.sort((a, b) => a - b);
  let totalTimeForAllQueries = 0;
  let timeElapsed = 0;
  if (queries.length >= 2) {
    for (let i = 1; i < queries.length; i++) {
      let previousNum = i - 1;
      timeElapsed += queries[previousNum];
      totalTimeForAllQueries += timeElapsed;
    }
    return totalTimeForAllQueries;
  }
  return 0;
}
