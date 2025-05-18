class Calculator {
  constructor(a, b, operation) {
     this.a = a;
    this.b = b;
      this.operation = operation.toLowerCase();
  }

  calculate() {
    switch (this.operation) {
      case "add":
        return this.a + this.b;

      case "subtract":
        return this.a - this.b;

        case "multiply":
         return this.a * this.b;

      case "divide":
        if (this.b !== 0) {
          return this.a / this.b;

        } else {
          return "Division by zero";
        }
      default:
        return "Invalid operation";
    }
  }
}


const a = 10;
const b = 5;
const operation = "multiply";

const calc = new Calculator(a, b, operation);

console.log("Ans:", calc.calculate());
