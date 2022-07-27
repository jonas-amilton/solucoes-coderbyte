/*
First Reverse
HIDE QUESTION
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.
For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.

Modifique a função FirstReverse(str) para que pegue o parâmetro str sendo passado e devolva a sequência em ordem invertida.
Por exemplo: se a sequência de entrada for "Hello World and Coders" então seu programa deve retornar a string sredoC dna dlroW olleH.
*/

//solution
//solução

function FirstReverse(string) {
    return string.split('').reverse().join('');
  }
     
  FirstReverse(readline());
