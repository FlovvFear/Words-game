function log (mes) {
    console.log(mes);
}
let answer = $(".game-block__result"),
    gameBtn = $(".game-block__btn"),
    welcomeBtn = $(".welcome-block__btn"),
    input = $(".game-block__input"),
    remaining = $(".game-block__remaining"),
    words = [
    "интересный",
    "умный",
    "арка",
    "оборот",
    "ключ"],
    word = words[Math.floor(Math.random() * words.length)],
    remainingLetters = word.length,
    answerArray = [];
    log(word);

for (let i = 0; i < word.length; i++) {
    answerArray[i] = " _ ";
}
// Можно ли определить массив циклом при его объявлении?

answer.text(answerArray.join(" "));
remaining.text("осталось " + remainingLetters);

input.on('keyup', function() {
    let value = $(this).val();
    $(this).val(value.replace(/[a-z\d`~{}//]/gi,''));
    let guess = input.val();
    input.val("");
    for (let i = 0; i < word.length; i++) {
        if(guess.toLowerCase() === word[i] && guess.toLowerCase() !== answerArray[i]) {
            answerArray[i] = guess.toLowerCase();
            answer.text(answerArray.join(" "));
            remainingLetters--;
            if(remainingLetters > 0) {
                remaining.text("осталось " + remainingLetters);
            } else {
                remaining.text("Поздравляем, вы угадали слово")
            };

        }
    }
});

welcomeBtn.on('click', function() {
    $('.welcome').addClass('hidden');
    $('.game').removeClass('hidden');
});


// gameBtn.on('click', function() {
//     let guess = input.val();
//     input.val("");
//     for (let i = 0; i < word.length; i++) {
//         if(guess.toLowerCase() === word[i] && guess.toLowerCase() !== answerArray[i]) {
//             answerArray[i] = guess.toLowerCase();
//             answer.text(answerArray.join(" "));
//             remainingLetters--;
//             if(remainingLetters > 0) {
//                 remaining.text("осталось " + remainingLetters);
//             } else {
//                 remaining.text("Поздравляем, вы угадали слово")
//             };

//         }
//     }
// });






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

