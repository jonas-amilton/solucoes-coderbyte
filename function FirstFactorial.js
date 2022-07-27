/*
First Factorial
HIDE QUESTION
Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it.
For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24.
For the test cases, the range will be between 1 and 18 and the input will always be an integer.

Modifique a função FirstFactorial(num) para que pegue o parâmetro numérico que está sendo passado e devolva o fatorial dele.
Por exemplo: se num = 4, então seu programa deve retornar (4 * 3 * 2 * 1) = 24.
Para os casos de teste, a faixa será entre 1 e 18 e a entrada será sempre um inteiro.

*/

//solution
//solução
function FirstFactorial(num) { 

    if (num === 0) {
        return 1;
    }
    
    return num * FirstFactorial(num-1); 
           
  }
     
  FirstFactorial(readline());
