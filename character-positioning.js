var input = process.argv.slice(2).join().split(",").join("");

function countLetters(inputString) {
  var string = inputString.toLowerCase();
  var letterCounts = {};

  for (var i = 0; i < string.length; i++) {
    if (letterCounts[string[i]]) {
      letterCounts[string[i]] += ", " + i;
    } else {
      letterCounts[string[i]] = String(i);
    }
  }
  return letterCounts;
}


console.log(countLetters(input));