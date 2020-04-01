console.log('OK');


// Scrivi un programma che stampi i numeri da 1 a 100, ma:
// per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi Buzz.
// per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// var numList = []
//
// for (var i = 1; i < 101; i++) {
//
//   if (numList[i] % 3 != 0) {
//     var multiplo3 = 'Fizz';
//     numList.push(multiplo3);
//   } else {
//     numList.push( i );
//   }
//   console.log(numList);
// }

var arrayNumeri = [];

for (var i = 1; i < 101; i++) {
  var nuovoNumero = i;

  if (nuovoNumero % 5 == 0 && nuovoNumero % 3 == 0) {
    arrayNumeri.push('FizzBuzz');
  } else if (nuovoNumero % 3 == 0) {
    arrayNumeri.push('Fizz');
  } else if (nuovoNumero % 5 == 0) {
    arrayNumeri.push('Buzz');
  } else {
    arrayNumeri.push(nuovoNumero);
  }

  console.log(arrayNumeri);
}
