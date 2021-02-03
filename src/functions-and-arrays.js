// Progression #1: Greatest of the two numbers

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

function greatestOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}

function findScaryWord(words) {
  if (words.length == 0)
  return null;
  var lengthy_word;
  maxlength = 0;
  if(words.length == 0)
  return null;
  for(var i = 0; i < words.length; i++) {
    var curr_len = words[i].length;
    if(curr_len > maxlength) {
      maxlength = curr_len;
      lengthy_word = words[i];
    }
  }
  return lengthy_word;
}

function netPrice(prices) {
  if (prices.length == 0)
  return null;
  var sum = 0;
  for (var i = 0; i < prices.length; i++) {
    sum += prices[i];
  }
  return sum;
}

function midPointOfLevels(levels) {
  if (levels.length == 0)
  return null;
  var sum = netPrice(levels);
  return sum / (levels.length);
}

function averageWordLength(items) {
  if (items.length == 0)
  return null;
  var tot_length = 0;
  for (var i = 0; i < items.length; i++) {
    tot_length += items[i].length;
  } return tot_length/items.length;
}

function uniqueArray(items) {
  if (items.length == 0)
  return null;
  return items.filter((a, b) => items.indexOf(a) == b);
}

function searchElement(words, word) {
  if (words.length == 0) {
    return null;
  }
  for (var i = 0; i < words.length; i++) {
    if (words[i] == word)
    return true;
  }
  return false;
}

function howManyTimesElementRepeated(words, word) {
  if (words.length == 0) {
    return null;
  }
  var count = 0;
  for (var i = 0; i < words.length; i++) {
    if (words[i] == word) {
      count++;
    }
  }
  return count;
}

function maximumProduct(matrix) {
  var maxProduct = 0;
  var product;
  for(var i = 0; i < 8; i++) {
    for(var j = 0; j < 8; j++) {
      if((j - 3) >= 0) {
        product = matrix[i][j] * matrix[i][j - 1] * matrix[i][j - 2] * matrix[i][j - 3];
        if(maxProduct < product)
        maxProduct = product;
      }
      if((i - 3) >= 0) {
        product = matrix[i][j] * matrix[i - 1][j] * matrix[i - 2][j] * matrix[i - 3][j];
        if(maxProduct < product)
        maxProduct = product;
      }

    }
  }
  return maxProduct;
}

function maximumProductOfDiagonals(matrix) {
  var maxProduct = 0;
  var product;
  for(var i = 0; i < 8; i++) {
    for(var j = 0; j < 8; j++) {
      if((j - 3) >= 0 && (i - 3) >= 0) {
        product = matrix[i][j] * matrix[i - 1][j - 1] * matrix[i - 2][j - 2] * matrix[i - 3][j - 3];
        if(maxProduct < product)
        maxProduct = product;
      }
    }
  }
  return maxProduct;
}