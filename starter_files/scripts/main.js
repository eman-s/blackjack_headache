/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

// let cards = {
//     '1': {
//       value: 1,
//     },
//     '2': {
//       value: 2,
//     },
//     '3': {
//       value: 3,
//     },
//     '4': {
//       value: 4,
//     },
//     '5': {
//       value: 5,
//     },
//     '6': {
//       value: 6,
//     },
//     '7': {
//       value: 7,
//     },
//     '8': {
//       value: 8,
//     },
//     '9': {
//       value: 9,
//     },
//     '10': {
//       value: 10,
//     },
//     'J': {
//       value: 10,
//     },
//     'Q': {
//       value: 10,
//     },
//     'K': {
//       value: 10,
//     },
//     'A': {
//       value: 11 || 1,
//     }
// }
var cards = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let hand = ['2', '2', '8'];



function handValue (hand) {

  for (let i = 0; i < cards.length; i++) {
    for (let j = 0; j < values.length; j++) {
      if (cards[i] === "A") {
         cards[i] = 11 || 1;
      }else {
        if (cards[i] === "J" || "Q" || "K") {
           cards[i] = 13;
        }else {
          return values[j];


        }
      }
    }
    console.log(cards[i]);
  }

}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
