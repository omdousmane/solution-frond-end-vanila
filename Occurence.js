/**
 * Soit le tableau data ci-dessous,
 *  compter dans un tableau results le nombre d'occurences de chaque entier du tableau data.
 */
class Occurences {
  constructor(tabOcc) {
    this.tabOcc = tabOcc;
  }

  countOccurrence() {
    let countMap = new Map();
    for (let i = 0; i < this.tabOcc.length; i++) {
      let key = this.tabOcc[i];
      if (countMap.has(key)) {
        countMap.set(key, countMap.get(key) + 1);
      } else {
        countMap.set(key, 1);
      }
    }
    return countMap;
  }
}

data = [
  1, 1, 2, 3, 4, 8, 8, 5, 6, 6, 9, 9, 10, 11, 12, 14, 48, 48, 51, 51, 1, 1, 1,
  51, 3, 3, 3, 51, 51, 51, 51, 51, 0,
];
const findOcc = new Occurences(data);
let content = findOcc.countOccurrence();
console.log(content);
