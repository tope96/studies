function palindrome(word) {
    var reverse = null;
    reverse = word.split('').reverse().join('');

    if (word == reverse){
      return true;
    } else{
      return false;
    }
}

console.log(palindrome('mam'));
