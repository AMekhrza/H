//Задание 5: Алгоритмическая задача
import * as readline from 'readline';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function squareDigits(num: number): number {
    if (num < 0) return num;
    return parseInt(num.toString().split('').map(n => Math.pow(parseInt(n), 2).toString()).join(''));
}


rl.question('Принимает число: ',(answer)=>{

    console.log(answer," ===> ",squareDigits(Number(answer)));
    
  })


// Тестовый пример
// console.log(squareDigits(5432)); // Should log "251694" 
// console.log(squareDigits(-5432)); // Should log  "-5432" 