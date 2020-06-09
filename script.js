function log (mes) {
    console.log(mes);
}
let answer = $(".game-block__result");
console.log(answer);

let words = [
    "интересный",
    "умный",
    "арка",
    "оборот",
    "ключ"
];
console.log('Массив "Слова": ', words);
let word = words[Math.floor(Math.random() * words.length)];
console.log('1:', word.length);

let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = " _ ";
}

answer.text(answerArray.join(" "));
let remainingLetters = word.length;
// let leave;

$("input").on('keyup', function() {
    let value = $(this).val();
    $(this).val(value.replace(/[a-z\d`~{}//]/gi,''));
  });

// Как записать введенное значение из инпута в переменную?





// while (remainingLetters > 0) {
//     if (guess === null) {
//         leave = true;
//         break
//     } else if (guess.length !== 1) {
//         alert('Пожалуйста введите одну букву');
//     } else {
//         for (let i = 0; i < word.length; i++) {
//             if(guess.toLowerCase() === word[i] && guess.toLowerCase() !== answerArray[i]) {
//                 answerArray[i] = guess.toLowerCase();
//                 remainingLetters--;
//             }
//         }
//     }
// }


// if (leave && (remainingLetters < word.length)) {
//     alert("Вы почти справились, вот загаданное слово: " + word);
// } else if (leave) {
//     alert("Обязательно возвращайтесь");
// } else {
//     alert("Поздравляем, было загаданно слово: " +  word);
// }

