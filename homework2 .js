1.
str = '98912349'
for (let i = 0; i < str.length; i++){
    if(str[i] === '9'){
        console.log(Number[i])
        }
}

2.

3.
let result = "" ;
let strNumber= String(124586123);
for(let i = 0; i < strNumber.length;i++){
    if(strNumber [i]% 2 === 0 && strNumber [i+1] % 2 ===0){
        result += strNumber [i] + "-";
        } else{ result += strNumber [i]  ;
          }
}
 console.log(result)

4.function r(number) {
  var  number =+prompt ()
    var result = 0,
      count = 0;
    for (let i = number; i >= 1; i = i / 10 - (i % 10) * 0.1) {
      count = i % 10;
      result = result * 10 + count;
    }
    return result;
  }
  
  console.log(r());

5.
var n = +prompt();
var count = 1;
var result;
for (i = 2;  i <= n ; i++){
    result = true;
    for (j = 2;  j <i; j++){
        if (i % j === 0){
            result = false;
            continue;
        }
    }
    if (result){
        console.log(Number[j]);
        count++;
    }
}
