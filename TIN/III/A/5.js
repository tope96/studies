function findLongestWord(str) {
  var splitted = str.split(' ');
  var longestWord = '';
  for (var i = 0; i < splitted.length; i++) {
    if (splitted[i].length > longestWord.length) {
      longestWord = splitted[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord("Lorem ipsum dolor sit amet"));
