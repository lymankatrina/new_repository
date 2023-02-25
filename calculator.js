let calculator = {
	addition() {
		return this.a + this.b;
	},

	multiply() {
		return this.a * this.b;
	},

	subtract() {
		return this.a - this.b;
	},

	divide() {
		return this.a / this.b;
	},

	read() {
		this.a = +prompt("a?", 0);
		this.b = +prompt("b?", 0);
	},
};

calculator.read();
alert(calculator.addition());
alert(calculator.multiply());
alert(calculator.subtract());
alert(calculator.divide());
