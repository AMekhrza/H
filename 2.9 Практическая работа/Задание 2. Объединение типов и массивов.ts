// Массовый показатель и значение null
type NumberOrNullArray = [number, null][];

// Массив строк и логических значений
type StringOrBooleanArray = [string, boolean][];

// Массив вложенных массивов чисел и строк
type NestedArray = [[number, string],];

// Массив чисел, строк, логических значений и значений undefined
type MixedArray = [number, string, boolean, undefined][];

// Массив объектов с свойствами 'id' и 'name'
type StudentMentorArray = [{ id: number; name: string }][];

// Массив чисел и значений null
type arr1Type = NumberOrNullArray;

// Массив строк и логических значений
type arr2Type = StringOrBooleanArray;

// Массив вложенных массивов чисел и строк
type arr3Type = NestedArray;

// Массив чисел, строк, логических значений и значений undefined
type arr4Type = MixedArray;
 
// Массив объектов с свойствами 'id' и 'name'
type arr5Type = StudentMentorArray;

 