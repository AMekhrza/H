
import * as readline from 'readline';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Задание 4. Написание кода

function mirrorWords(wordsString: string): string {
    if (!wordsString) {
      return "";
    }
  
    const wordsArray = wordsString.split(" ");
    const mirroredWordsArray = wordsArray.map((word) => word.split("").reverse().join(""));
    return mirroredWordsArray.join(" ");
  }

  // Есть два способа запустить этот код :

  // 1- введите значение, которое функция изменит на обратное и покажет результат

  rl.question('Принимает строку из нескольких слов, разделённых пробелами: ',(answer)=>{

    console.log(answer," ===> ",mirrorWords(answer));
    
  }) 

// 2- Прокомментируйте строки с 25 по 30 и раскомментируйте строки 33, 34, чтобы увидеть уже готовые примеры
  
  // console.log(mirrorWords("Это пример!")); // Output: отЭ !ремирп
  // console.log(mirrorWords("This is an example!")); // Output: sihT si na !elpmaxe

 