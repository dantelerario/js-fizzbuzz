console.log('OK');


// Scrivi un programma che stampi i numeri da 1 a 100, ma:
// per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi Buzz.
// per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


var numList = [];
var btnShow = document.getElementById('show');
var btnReset = document.getElementById('reset');

btnShow.addEventListener('click',
  function() {
    for (var i = 1; i < 101; i++) {
      var nuovoNumero = i;

      if (nuovoNumero % 5 == 0 && nuovoNumero % 3 == 0) {
        numList.push('FizzBuzz');
      } else if (nuovoNumero % 3 == 0) {
        numList.push('Fizz');
      } else if (nuovoNumero % 5 == 0) {
        numList.push('Buzz');
      } else {
        numList.push(nuovoNumero);
      }
    }
    console.log(numList);
    document.getElementById("listanumeri").innerHTML = numList;
  }
)

btnReset.addEventListener('click',
  function() {
    numList = [];
    document.getElementById("listanumeri").innerHTML = numList;
 }
)
