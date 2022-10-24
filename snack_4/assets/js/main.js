// Jsnack 4
// Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

const letter = ["a", "b", "c"];
const number = [1, 2, 3];

// let mixLetterNumber = [];
function mixArray(firstArray, secondArray) {
    let mixAllArray = [];

    for (let i = 0; i < firstArray.length; i++) {
        const singleFirstArray = firstArray.shift();
        mixAllArray.push(singleFirstArray);
        const singleSecondArray = secondArray.shift();
        mixAllArray.push(singleSecondArray);
    }

    return mixAllArray

}


console.log(mixArray(letter, number));