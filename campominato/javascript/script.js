// Campo Minato
// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// BONUS: all'inizio il software richiede anche una difficoltà all'utente
// che cambia il range di numeri casuali.
// Con difficoltà 0 => numeri vietati da 1 a 100, tentativi 84
// con difficoltà 1 => numeri vietati  da 1 a 80, tentativi 64
// con difficoltà 2 => numeri vietati  da 1 a 50, tentativi 34
var numberBomb = []; // salviamo i numeri
while (numberBomb.length < 16) {
  //pusho solo se il numero non è già presente
  var numberRandom = getRandomNumber(1, 100);
  var find = isInArray(numberBomb, numberRandom); // true o false
  if(find == false) {
    numberBomb.push(numberRandom);
  }
}
console.log(numberBomb.sort());
// una variabile per il punteggio
var points = 0;
//messaggio standard
var message = 'Hai vinto';
// un array per i numeri generati dall'utente
var numbersUser = [];
// una variabile per il numero di tentativi
var numberPrompt;
// numeri minimi e massimi della base di calcolo
var numMinChek;
var numMaxChek;
// tentativi di difficoltà
var difficultTry = 0;
do {
  var difficult = parseInt(prompt('con che grado di difficoltà vuoi giocare? da 0 a 2:'));
  difficultTry++;
} while (checkRangeNumber(0, 2, difficult) == false && difficultTry < 3);
if (difficult == 0) {
  numberPrompt= 84;
  numMinChek = 1;
  numMaxChek = 100;
} else if (difficult == 1){
  numberPrompt= 64;
  numMinChek = 1;
  numMaxChek = 80;
} else if (difficult == 2) {
  numberPrompt= 34;
  numMinChek = 1;
  numMaxChek = 50;
}
console.log('difficolta',difficult);
console.log('volte',numberPrompt);
console.log('base minima',numMinChek);
console.log('base massima',numMaxChek);
var findBomb = false;
while (numbersUser.length < numberPrompt && findBomb == false) {
  var userNumber = false;
  do{
    var userNumber = parseInt(prompt('inserisci un numero da 1 a 100'));
    console.log('numero inserito' + checkRangeNumber(numMinChek, numMaxChek, userNumber));
  } while(checkRangeNumber(numMinChek, numMaxChek, userNumber) == false)
  if(isInArray(numbersUser, userNumber) == false) {
    numbersUser.push(userNumber);
    // se il numero dell'utente è presente nelle numberBomb hai perso
    if(isInArray(numberBomb, userNumber) == true){
      message = 'hai perso';
      findBomb = true;
    } else {
      points++;
    }
  }
}
console.log(numbersUser);
console.log(message + ' ' + points);
alert(message + ' ' + points);
// ______________________________
// FUNZIONI
// funzione che genera numeri
function getRandomNumber(numMin, numMax) {
  //codice
  numMin = Math.ceil(numMin);
  numMax = Math.floor(numMax);
  var result = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
  return  result;
}
// funzione che cerca in un array
function isInArray(array, element) {
  var i = 0;
  var result = false;
  while (i < array.length && result == false) {
    if (array[i] == element) {
      result = true;
    }
    i++;
  }
  return result;
}
//funzione che controlla che un numero sia in un certo range
function checkRangeNumber(min, max, number) {
  var result = false;
  if(number >= min && number <= max) {
    result = true;
  }
  return result;
}
