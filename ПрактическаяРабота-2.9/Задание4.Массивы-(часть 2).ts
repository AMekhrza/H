function modifySentence(sentence: string): string {
    // Разделяем предложение на слова
    let words: string[] = sentence.split(' ');

    // Преобразуем каждое слово
    words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    // Подсчитываем количество букв в первом слове
    const firstWordLength: number = words[0].length;

    // Удаляем слово с индексом, равным длине первого слова, если такое есть
    if (firstWordLength < words.length) {
        words.splice(firstWordLength, 1);
    }

    // Объединяем слова обратно в предложение
    return words.join(' ');
}

// Пример использования функции
sentence= "Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили.";
let modifiedSentence: string = modifySentence(sentence);
console.log(modifiedSentence); 
  