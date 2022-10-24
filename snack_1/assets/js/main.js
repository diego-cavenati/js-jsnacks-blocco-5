// Jsnack 1
// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

const zucchine = [
    {
        varieties : "Zucchina nera",
        weight : 200,
        length : 20,
    },
    {
        varieties : "Zucchino romanesco",
        weight : 260,
        length : 270,
    },
    {
        varieties : "Zucchino fiorentino",
        weight : 205,
        length : 205,
    },
    {
        varieties : "Zucchina napoletana",
        weight : 250,
        length : 260,
    },
    {
        varieties : "Zucchine tonde",
        weight : 500,
        length : 80,
    },
    {
        varieties : "Zucchine trombetta",
        weight : 800,
        length : 40,
    },
    {
        varieties : "Zucchino giallo",
        weight : 100,
        length : 30,
    },
    {
        varieties : "Zucchino rugoso friulano",
        weight : 500,
        length : 50,
    },
    {
        varieties : "Zucchina Crookneck",
        weight : 400,
        length : 40,
    },
    {
        varieties : "Zucchina Bergamo",
        weight : 20,
        length : 30,
    },
]

// Calcola quanto pesano tutte le zucchine
// zucchine.forEach(element => {
//     let zucchina = 0
//     zucchina += element.weight;

//     return zucchina 
// });

const zucchineWeight = zucchine.map(element => {
    let zucchina = 0
    zucchina += element.weight;

    return zucchina 
});

console.log(zucchineWeight);

function sum(array) {
    return array.reduce((a, b) => a + b, 0);
};

console.log(sum(zucchineWeight));
