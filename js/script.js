// scrivo l'array contenente i cognomi
var arrayCognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

// chiedo email all'utente
var cognomeUtente = prompt('inserisci il tuo cognome');

// faccio push per aggiungere nomeImmesso alla lista
arrayCognomi.push(cognomeUtente);

// imposto il ciclo for per rendere i cognomi tutti minuscoli
for (i = 0; i < arrayCognomi.length; i++  ) {
    arrayCognomi[i] = arrayCognomi[i].toLowerCase();
}

console.log(arrayCognomi);

nomeImmesso = cognomeUtente.toLowerCase();

// stampo la lista ordinata nella console
arrayCognomi.sort();
console.log(arrayCognomi);

// e in un alert
alert(arrayCognomi);

var posizione = arrayCognomi.indexOf(nomeImmesso);

console.log(arrayCognomi.indexOf(nomeImmesso));

alert('La posizione del nome inserito è ' + posizione);







