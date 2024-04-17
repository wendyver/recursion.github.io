// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n, product = 1) {
      // base
      if (n < 0) {
        return null;
      }
      if (n === 1 || n === 0) {
        return product;
      }
        //recursion
        product *= n;
        return factorial(n -1, product);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array, total = 0) {
  
  if (array.length === 0) {
    return total;
  }
  total += array[0];
  return sum(array.slice(1), total);
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array, sum = 0) {
  if (array = []) {
    return 0;
  } sum += array[0];
  return sum(array.slice(1).total)
};

// 4. Check if a number is even.
var isEven = function(n) {
      if (n === 0) {
        return true;
      } else if (n === 1) {
        return false;
      } else if (n > 0) {
        return isEven(n - 2);
    } else if (n < 0) {
      return isEven(n + 2)
    }

};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 0) {
    return 0;
  } else if (n > 0) {
    return (n -1 + sumBelow(n -1));
  } else if (n < 0) {
    return (n +1) + sumBelow(n + 1)
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  if (x + 1 === y || x === y || x - 1 === y) {
    return [];
  } else if (x < y) {
  return [x + 1].concat(range(x + 1, y));
} else if (x > y) {
  return [x - 1].concat(range(x - 1, y));
}
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  // base case: if exponent is 0, return 1
  if (exp === 0) {
    return 1;
  }
  // base case: if exponent is 1, return base
  if (exp === 1) {
    return base;
  }
  // recursive case for positive exponents
  if (exp > 0) {
    return base * exponent(base, exp - 1);
  }
  // recursive case for negative exponents
  if (exp < 0) {
    // invert base and make exponent positive
    return 1 / exponent(base, -exp);
  }
};


// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  // base case: if n is 1, it's a power of 2
  if (n === 1) {
    return true;
  }
  // base case: if n is less than 1, or not divisible by 2, it's not a power of 2
  if (n < 1 || n % 2 !== 0) {
    return false;
  }
  // recursive case: recursively check if n/2 is a power of 2
  return powerOfTwo(n / 2);
};


// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  // base case
  if (string.length === 0) {
    return "";
  }
  // recursive case - return the last character of the string, concatenated
  // with the result of reversing the rest of the string
  return string[string.length - 1] + reverse(string.slice(0, -1))

};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
    // remove spaces from string
    var spacelessString = string.replace(/\s/g, "")
  // base case - if string is empty, or has only 1 letter, it's a palindrome
  if (spacelessString.length <= 1) {
    return true;
  }
  // recursive case - compare the first and last letters of the string
  // if they are equal, recursively check the substring, without the first and last characters
  // if not equal, return false
  if (spacelessString[0].toLowerCase() === spacelessString[spacelessString.length - 1].toLowerCase()) {
    return palindrome(spacelessString.slice(1, -1));
  } else {
    return false;
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y) {
  if (y === 0) {
    return 0;
  } else if (y > 0) {
    return x + multiply(x, y - 1);
  } else {
    return -multiply(x, -y);
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2, index = 0) {
  // base case: if both strings have been gone through
  if (index === str1.length && index === str2.length) {
    return true;
  }
  // base case: if lengths of strings are different
  if (index === str1.length || index === str2.length) {
    return false;
  }
  // if characters at current index are not equal, return false
  if (str1[index] !== str2[index]) {
    return false;
  }
  return compareStr(str1, str2, index + 1);
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, index = 0){
  // base case: if index is greater than or equal to string length, return empty array
  if (index >= str.length) {
    return [];
  }
  // recursive case: create an array with the current charater and 
  // recursively call create array for the remaining characters
  return [str[index]].concat(createArray(str, index + 1));
};

// 17. Reverse the order of an array
var reverseArr = function (array) {

  // base case: if array is empty or has only one element, return the array itself.
if (array.length <= 1) {
  return array;
}
  // recursive case: reverse the sub-array, excluding the first element,
  // and concatenate it with the first element
  return reverseArr(array.slice(1)).concat(array[0]);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  // base case
  if (length === 0) {
    return [];
  }
  return buildList(value, length - 1).concat([value]);
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  // base case: if the array is empty, return 0
  if (array.length === 0) {
    return 0;
  }
  // if the first element of the array matches the value,
  // increment the count and recursively check the rest of the array
  if (array[0] === value) {
    return 1 + countOccurrence(array.slice(1), value);
  } else {
    // if the first element of the array does not match the value, 
    // recursively check the rest of the array
    return countOccurrence(array.slice(1), value);
  }
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  // Base case: if the array is empty, return an empty array
  if (array.length === 0) {
    return [];
  }
  // Apply the callback function to the first element of the array
  // assign result of that callback to mappedValue
  var mappedValue = callback(array[0]);
  // recursively apply rMap to the rest of the array and
  // concatenate the mapped value
  return [mappedValue].concat(rMap(array.slice(1), callback));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  // base case: if n is 0 or 1, return n
  if (n === 0 || n === 1) {
    return n;
  }
  // base case: if n is negative, return null
  if (n < 0) {
    return null;
  }
  // recursive case: return the sum of the previous 2 Fibonacci numbers
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  // base case: if the input array is empty, return an empty array
  if (input.length === 0) {
    return [];
  }
  // capitalize the first word in the input array and store it
  var capitalizedWord = input[0].toUpperCase();
  // recursively capitalize the rest of the words in the array
  var restCapitalized = capitalizeWords(input.slice(1));
  // concatenate the capitalized word with the rest of the words, capitalized
  return [capitalizedWord].concat(restCapitalized);
};


// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  // base case: if the input array is empy, return an empty array
  if (array.length === 0) {
    return [];
  }
  // capitalize the first letter of the first word in the array, and store it
  var capitalizedWord = array[0][0].toUpperCase() + array[0].slice(1);
  // recursively capitalize the first letter of the rest of the words in the array
  var restCapitalized = capitalizeFirst(array.slice(1));
  // concatenate the capitalized word with rest of the words
  return [capitalizedWord].concat(restCapitalized);

};
  

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
