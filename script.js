const words = ['apple', 'banana', 'grape', 'orange', 'Hello World!'];
let currentWordIndex = 0;

const wordDisplay = document.getElementById('word-display');
const inputField = document.getElementById('input-field');
const result = document.getElementById('result');

function setNewWord() {
    wordDisplay.textContent = `Type this word: ${words[currentWordIndex]}`;
}

inputField.addEventListener('input', function() {
    if (inputField.value === words[currentWordIndex]) {
        result.textContent = 'Correct!';
        currentWordIndex++;
        if (currentWordIndex < words.length) {
            setNewWord();
            inputField.value = '';
        } else {
            result.textContent = 'You finished all the words!';
        }
    }
});

setNewWord();
