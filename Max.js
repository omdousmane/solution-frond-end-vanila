/*
 *Ecrire un script pour déterminer le maximun de trois variables distinctes a, b et c
 */
class Max {
  constructor(tabNumber) {
    this.tabNumber = tabNumber;
  }

  max() {
    return Math.max(...this.tabNumber);
  }
}

const maxNum = new Max([10, 20, 80, 3]);
let content = maxNum.max();
console.log(content);
