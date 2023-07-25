function padLeft(padding: number | string, input: string) {
    if (typeof padding === "number") {
      return " ".repeat(padding) + input;
    }
    return padding + input;
}
let str = padLeft('3','he');
console.log(str);

function example(x: string | number, y: string | boolean) {
    if (x === y) {
      // We can now call any 'string' method on 'x' or 'y'.
      console.log('This case');
      console.log(x.toUpperCase());
      console.log(y.toLowerCase());
            
    } else {
      console.log(x);
      console.log(y);
    }
  }
  example('hi','hi');