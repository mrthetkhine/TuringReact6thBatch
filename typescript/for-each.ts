function myForEach<Type>(arr: Type[], callback: (arg: Type, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}
myForEach([1,2,3],(elem,index)=>{
    console.log('Element ',elem.toFixed(), ' Index ',index?.toFixed());
    //elem.somethingElse();
})