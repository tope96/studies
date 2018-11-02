function sorting(word){
    var sorted = null;

    sorted = word.split('').sort().join('');

    return sorted;
}

console.log(sorting('webmaster'));
