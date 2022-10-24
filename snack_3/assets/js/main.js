// Jsnack 3
// Scrivi una funzione che accetti una stringa come argomento e la ritorni
// girata (es. Ciao -> oaiC)

function reverseWord(text) {
    const reverseUserWord = text.split("").reverse().join("");
    return reverseUserWord
}
console.log(reverseWord("Ciao"));