class MyArray<T> {
    elements: T[];

    constructor(elements: T[] = []) {
        this.elements = elements;
    }

    areElementsEqual(index1: number, index2: number): boolean {
        const el1 = this.elements[index1];
        const el2 = this.elements[index2];

        if (typeof el1 === "object" && typeof el2 === "object") {
            return JSON.stringify(el1) === JSON.stringify(el2);
        }

        return el1 === el2;
    }

    flatten(): any[] {
        const result: any[] = [];

        const flattenArray = (arr: any[]) => {
            arr.forEach(item => {
                if (Array.isArray(item)) {
                    flattenArray(item);
                } else {
                    result.push(item);
                }
            });
        };

        flattenArray(this.elements);
        return result;
    }
}
const arr = new MyArray<number>([1, 2, 3]);
console.log(arr.elements); // [1, 2, 3]

const arrNested = new MyArray<any>([1, [2, 3], [[4, 5]], 6]);
console.log(arrNested.flatten()); // [1, 2, 3, 4, 5, 6]

const objArray = new MyArray<object>([{ a: 1 }, { a: 1 }, { b: 2 }]);
console.log(objArray.areElementsEqual(0, 1)); // true
console.log(objArray.areElementsEqual(1, 2)); // false
 