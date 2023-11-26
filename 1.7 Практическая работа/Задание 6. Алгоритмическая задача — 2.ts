//Задание 6: Алгоритмическая задача — 2

import * as readline from 'readline';
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  

function digitalRoot(num: number): number {
    while (num >= 10) {
        num = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    return num;
}


rl.question('Принимает число: ',(answer)=>{

    console.log(answer," ===> ",digitalRoot(Number(answer)));
    
  })



// Тестовый пример
// console.log(digitalRoot(421)); // Should log "7" 
// console.log(digitalRoot(942 )); // Should log "6" 
// console.log(digitalRoot(0 )); // Should log "0" 