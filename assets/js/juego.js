/*
2C = Two of Clubs
2D = Two of Diaminds
2H = Two of Hearts
2S = Two of Spades
*/

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

//Esta función crea un nuevo deck o baraja
const crearDeck = () => {

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos) {
        for (let especial of especiales) {
            deck.push(especial + tipo)
        }
    }
    //console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

crearDeck();

//Esta función permite tomar una carta
const perdirCarta = () => {
    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    console.log(deck);
    console.log(carta); //Carta debe de ser de la baraja
    return carta;
}

//perdirCarta();
const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10 :
        valor * 1;
    /*
    let puntos = 0;
    if (isNaN(valor)) {
        puntos = (valor === 'A') ? 11 : 10;
        console.log('No es un número');
    } else {
        console.log('Es un número');
        puntos = valor * 1;
    }
    console.log(puntos);
    */
}

const valor = valorCarta(perdirCarta());
console.log({ valor });