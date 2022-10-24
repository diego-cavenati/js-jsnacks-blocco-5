// Jsnack 2
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.


const zucchine = [
    {
        varieties : "Zucchina nera",
        weight : 200,
        length : 20,
    },
    {
        varieties : "Zucchino romanesco",
        weight : 260,
        length : 5,
    },
    {
        varieties : "Zucchino fiorentino",
        weight : 205,
        length : 25,
    },
    {
        varieties : "Zucchina napoletana",
        weight : 250,
        length : 14,
    },
    {
        varieties : "Zucchine tonde",
        weight : 500,
        length : 8,
    },
    {
        varieties : "Zucchine trombetta",
        weight : 800,
        length : 19,
    },
    {
        varieties : "Zucchino giallo",
        weight : 100,
        length : 3,
    },
    {
        varieties : "Zucchino rugoso friulano",
        weight : 500,
        length : 20,
    },
    {
        varieties : "Zucchina Crookneck",
        weight : 400,
        length : 10,
    },
    {
        varieties : "Zucchina Bergamo",
        weight : 20,
        length : 30,
    },
]

const zucchineLenghtTiny = zucchine.map(element => {

    let zucchina = 0;

    if (element.length <= 15){
        zucchina += element.length;
    }

    return zucchina 
});

console.log(zucchineLenghtTiny);


const zucchineLenghtBig = zucchine.map(element => {

    let zucchina = 0;

    if (element.length > 15){
        zucchina += element.length;
    }

    return zucchina 
});

console.log(zucchineLenghtBig);


function sum(array) {
    return array.reduce((a, b) => a + b, 0);
};


const bigZucchine = sum(zucchineLenghtBig);
console.log("total lenght of big zucchine", bigZucchine);

const tinyZucchine = sum(zucchineLenghtTiny);
console.log("total lenght of tiny zucchine", tinyZucchine);
