class Box {
    contents: string = "";
    set(value: string) {
      this.contents = value;
      return this;
    }
}
class ClearableBox extends Box {
    clear() {
      this.contents = "";
    }
}
const a = new ClearableBox();
const b = a.set("hello");  