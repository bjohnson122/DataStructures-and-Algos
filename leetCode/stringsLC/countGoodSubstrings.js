var countGoodSubstrings = function (s) {
  const set = new Set();
  let left = 0;
  let right = 0;
  let counter = 0;

  while (right < s.length) {
    while (set.has(s[right])) {
      //possible duplicates here, deleting chars from left
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]); //adds letter to set

    if (set.size === 3) {
      set.delete(s[left]);
      left++;
      counter++;
    }

    right++;
  }

  return counter;
};
