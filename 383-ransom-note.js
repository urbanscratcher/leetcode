/*
This problem will introduce you to the hash map (or dictionary) data structure.


  Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

  Each letter in magazine can only be used once in ransomNote.
*/

// RESULT ------------------------------------------------
// Runtime: 71 ms, faster than 92.99% of JavaScript online submissions for Ransom Note.
// Memory Usage: 46.2 MB, less than 35.15% of JavaScript online submissions for Ransom Note.
// ---------------------------------------------------------

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // Problem
  // Are elements of ransomNote parts of magazine?

  let magazineArr = magazine.split("");
  let ransomArr = ransomNote.split("");

  // 1. loop ransomNote
  for (let i = 0; i < ransomArr.length; i++) {
    // 2. if not found in magazine, return false right away
    const j = magazineArr.indexOf(ransomArr[i]);

    if (j === -1) {
      return false;
    }

    // 3. remove if any equiv element found in magazine
    magazineArr.splice(j, 1);
  }

  // 4. return true if everything goes well
  return true;
};

// ANOTHER -------------------------------------------
/*
  // another solution
  return ransomArr.every((m) => {
    for (let i = 0; i < magazineArr.length; i++) {
      if (magazineArr[i] === m) {
        magazineArr.splice(i, 1);
        return true;
      }
    }

    return false;
  });
*/

// TEST -------------------------------------------
// true
const test = canConstruct(
  "bg",
  "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"
);

// false
// const test = canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi");

// true
// const test = canConstruct("aa", "aab");
console.log(test);
