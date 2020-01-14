// Campo Minato
// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

var arrayRandomNumber = [];
var arrayUserTries = [];
var findNumber = false;
var maxTries = 84;

while (arrayRandomNumber.length < 16) {
  var cpuRandomNumber = getRandomNumber(1, 100);
  if (arrayRandomNumber.includes(cpuRandomNumber) == false) {
    arrayRandomNumber.push(cpuRandomNumber);
  }
}

function checkBomb(arrayToCheck, numberToCheck) {
  for (var i = 0; i < arrayToCheck.length; i++) {
    if (numberToCheck == arrayToCheck[i]) {
      return true;
    }
  }
  return false;
}

var counter = 0;
while (arrayUserTries.length < maxTries && checkBomb(arrayRandomNumber, userTry) == false) {
  var userTry = parseInt(prompt('Inserisci un numero da 1 a 100'));
  // controllo che sia una bomba(checkBomb)
    //se è una bomba il gioco è finito, indico il punteggio
  // controllo che non ho già detto quel number
    // aggiungo il tentativo all'array dei tentativi
    // aumentare il punteggio
  // se il numero inserito è uguale ad uno dei numeri precedentemente inseriti, chiediamo di reinserire il numero
  // se abbiamo raggiunto il max dei tentativi allora abbiamo vinto
}



function getRandomNumber(numMin, numMax) {
  return Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
}
