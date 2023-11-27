function capitalizeEachWord(sentence: string): string {
    // Разделяем предложение на слова
    let words: string[] = sentence.split(' ');

    // Преобразуем каждое слово
    words = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // Объединяем слова обратно в предложение
    return words.join(' ');
}

// Пример использования функции
let sentence: string = "Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили.";
let capitalizedSentence: string = capitalizeEachWord(sentence);
console.log(capitalizedSentence);
