function log (mes) {
    console.log(mes);
}
let answer = $(".game-block__result"),
    // gameBtn = $(".game-block__btn"),
    welcomeBtn = $(".welcome-block__btn"),
    congratulationBtn = $(".congratulation-block__btn"),
    // не получается найти кнопку
    input = $(".game-block__input"),
    remaining = $(".game-block__remaining"),
    words = [
    "интересный",
    "умный",
    "арка",
    "оборот",
    "ключ"
    ],
    word = words[Math.floor(Math.random() * words.length)],
    remainingLetters = word.length,
    answerArray = [];
    log('1# Слово:')
    log(word);


// Приветсвенный экран

welcomeBtn.on('click', function() {
    $('.welcome').addClass('hidden');
    $('.game').removeClass('hidden');
});


// Экран игры

function newAnswerArray () {
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = " _ ";
        answer.text(answerArray.join(" "));
    }
}

// Можно ли определить массив циклом при его объявлении? Пример:
// let answerArray = [
//     for (let i = 0; i < word.length; i++) {
//         answerArray[i] = " _ ";
//         answer.text(answerArray.join(" "));
//     }
// ];


newAnswerArray();
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
                $('.game').addClass('hidden');
                $('.congratulation').removeClass('hidden');
            };

        }
    }
});

// Экран поздравлений

// не работает, так как не получается найти кнопку
log('2# Кнопка поздравлений:');
log(congratulationBtn);
congratulationBtn.on('click', function() {
    word = words[Math.floor(Math.random() * words.length)];
    remainingLetters = word.length
    newAnswerArray();
    $('.congratulation').addClass('hidden');
    $('.game').removeClass('hidden');
    log('hi');
});


// Старый код ниже


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

