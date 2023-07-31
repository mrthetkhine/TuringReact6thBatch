class MyClass {
    name = "MyClass";
    getName() {
      return this.name;
    }
}
const c = new MyClass();
const obj = {
    name: "obj",
    getName: c.getName,
};
   
  // Prints "obj", not "MyClass"
console.log(obj.getName());