/**
 * @Description Faire le Cryptogramme César, décallage d'un nombre N des lettres d'une phrase.
 * Une Fonction qui permet de décaler une lettre de n position dans les lettres encodés en JS
 * Une Fonction qui permet de crypter un message qui utilisera la fonction char_rot
 * Créez la fonction qui permet de décoder le message encodé avec le cryptogramme précédent.
 */
class Cesar {
  constructor(shifts) {
    this.shifts = shifts;
  }

  // the function of shifting
  char_rot(word) {
    return String.fromCharCode(word.charCodeAt(0) + this.shifts);
  }

  // the function of sunhifting
  unchar_rot(word) {
    return String.fromCharCode(word.charCodeAt(0) - this.shifts);
  }

  // the function for scripting word
  scriptingWord(wordSentence) {
    return wordSentence
      .split("")
      .map((el) => this.char_rot(el))
      .join("");
  }

  // the function for unscripting word
  unscriptingWord(wordSentence) {
    return wordSentence
      .split("")
      .map((el) => this.unchar_rot(el))
      .join("");
  }
}

// the function for unscripting word

let cesar = new Cesar(1);
// cesar.scriptingWord("la guinée est belle");
console.log(cesar.scriptingWord("la guinée est belle"));
let result = cesar.scriptingWord("la guinée est belle");
console.log(cesar.unscriptingWord(result));
