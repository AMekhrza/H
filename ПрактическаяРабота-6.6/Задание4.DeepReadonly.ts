type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
  };
  
  type X = {
    x: {
      a: 1;
      b: 'hi';
      z: string;
    };
    y: string;
  };
  
  type Expected = {
    readonly x: {
      readonly a: 1;
      readonly b: 'hi';
      readonly z: string;
    };
    readonly y: string;
  };
  
  type Todo = DeepReadonly<X>; // должно быть таким же, как `ожидалось`
  
  const test: Todo = {
    x: {
      a: 1,
      b: 'hi',
      z: 'try change me too',
    },
    y: 'try change me',
  };
  
  test.y = 'changed'; // Error
  test.x.z = 'changed'; // Error
   