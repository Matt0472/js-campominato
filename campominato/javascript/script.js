// Campo Minato
// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

var arrayRandomNumber = [];
var findNumber = false;
for (var i = 1; i <= 16; i++) {
  var cpuRandomNumber = getRandomNumber(1, 100);
  arrayRandomNumber.push(cpuRandomNumber);
  console.log(arrayRandomNumber);
}

for (var j = 1; j <= 16; j++) {
  var userNumbers = parseInt(prompt('Inserisci un numero da 1 a 100'));
  console.log(userNumbers);
}

var g = 0;
while (g < arrayRandomNumber.length && trovato == false) {
  var position = arrayRandomNumber[i];
  if (userNumbers != position) {
    findNumber = true;
    console.log('Hai perso');
  } else {
    console.log('Hai vinto');
  }
  g++
}











function getRandomNumber(numMin, numMax) {
  return Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
}
