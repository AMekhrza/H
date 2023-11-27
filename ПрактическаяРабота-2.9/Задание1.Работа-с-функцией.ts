function arrayDiff<T>(a: T[], b: T[]): T[] {
// Создайте набор из массива b для эффективного поиска
    const bSet: Set<T> = new Set<T>(b);

     // Отфильтруйте массив a, чтобы сохранить только элементы, отсутствующие в best
    const filteredA: T[] = a.filter((element: T) => !bSet.has(element));
  
    return filteredA;
  }
  
  const result1 = arrayDiff([1, 2], [1]);
console.log(result1); // Output: [2]

const result2 = arrayDiff([1, 2, 3, 4], [5, 6]);
console.log(result2); // Output: [1, 2, 3, 4]

const result3 = arrayDiff([2, 2, 2, 2, 3], [2]);
console.log(result3); // Output: [3]
   