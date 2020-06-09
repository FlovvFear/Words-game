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
console.log('2:', answerArray);
let remainingLetters = word.length;
let leave;

while (remainingLetters > 0) {
    alert(answerArray.join(" "));
    let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры").replace(/[a-z]/gi,'');
    if (guess === null) {
        leave = true;
        break
    } else if (guess.length !== 1) {
        alert('Пожалуйста введите одну букву');
    } else {
        for (let i = 0; i < word.length; i++) {
            if(guess.toLowerCase() === word[i] && guess.toLowerCase() !== answerArray[i]) {
                answerArray[i] = guess.toLowerCase();
                remainingLetters--;
            }
        }
    }
}
if (leave && (remainingLetters < word.length)) {
    alert("Вы почти справились, вот загаданное слово: " + word);
} else if (leave) {
    alert("Обязательно возвращайтесь");
} else {
    alert("Поздравляем, было загаданно слово: " +  word);
}

