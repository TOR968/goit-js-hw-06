// Write code under this line
class StringBuilder {
  constructor(value) {
    this._value = value;
  }
  get value() {
    return this._value;
  }
  append = function (str) {
    return (this._value += str);
  };
  prepend = function (str) {
    return (this._value = str + this._value);
  };
  pad = function (str) {
    return this.append(str) + this.prepend(str);
  };
}

console.log(typeof StringBuilder);
// 'function'

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
