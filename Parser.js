/*
 * Créez une classe Parser qui permettra de parser une chaîne de caractères en fonction d'un motif donné.
 * Voyez l’exemple de l'utilisation de cette classe ci-dessous avant d'implémenter le code.
 * Gardez les digits uniquement ainsi que les nombres dans la chaîne de caractères.
 */
class Parser {
  constructor(motif) {
    this.motif = motif;
  }

  // function parser
  parse(word) {
    let tabWord = word.split(this.motif).map((element) => element.trim());
    console.log(tabWord);
    return tabWord.filter((n) => Number(n));
  }
}

const phrase = "8790: bonjour le monde:8987:7777:Hello World:    9007";

const p = new Parser(":");
p.parse(phrase);
console.log(p.parse(phrase));
//8790 8987 7777 9007
