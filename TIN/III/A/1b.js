var a = function(number){
  if(number == 0){
      return 1;
  }else
    return number * a(number - 1);
}

console.log(a(5));
