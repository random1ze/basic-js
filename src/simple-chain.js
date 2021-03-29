const CustomError = require("../extensions/custom-error");

const chainMaker = {
	arr: [],
	getLength() {
		return this.arr.length;
  },
  addLink(value) {
		this.arr.push(`( ${value} )`);
		return this;
  },
	removeLink(position) {
		if (position < 1 || position > this.arr.length) {
			this.arr = [];
			throw new Error('Not implemented');
		} else {
			this.arr = this.arr.filter(el => el !== this.arr[position - 1]);
			return this;
		}
  },
	reverseChain() {
		this.arr = this.arr.reverse();
		return this;
  },
	finishChain() {
		const resultArr = this.arr;
		this.arr = [];
		return resultArr.join('~~');
  }
};

module.exports = chainMaker;