// Jsnack 5
// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”

const brands = ["Nike", "Adidas", "Gucci", "Lacoste", "Zara", "Diesel", "Pull & Bear",]

function positionIncluded(main, min, max) {
    
    let included = [];

    if (max > main.lenght) {
        max = main.lenght;    
    }

    included.push(main.slice(min, max))

    return included

}

console.log(positionIncluded(brands, 3, 9));
