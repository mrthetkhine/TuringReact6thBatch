function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}
const arr = combine<string|number>([1, 2, 3], ["hello"]);
console.log('arr ',arr);