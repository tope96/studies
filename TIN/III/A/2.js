function fibonacci(number){
    var a = 1;
    var b = 0;
    var temp;
  
    while (number >= 0){
      temp = a;
      a = a + b;
      b = temp;
      number--;
    }
  
    return b;
  }

  console.log(fibonacci(4));
