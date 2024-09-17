// Define the list of words, with "Hello World!" as the last word
const words = ['apple', 'banana', 'grape', 'orange', 'Hello World!'];
let currentWordIndex = 0;

const wordDisplay = document.getElementById('word-display');
const inputField = document.getElementById('input-field');
const result = document.getElementById('result');

// Function to set the current word in the display
function setNewWord() {
    wordDisplay.textContent = `Type this word: ${words[currentWordIndex]}`;
    inputField.style.borderColor = '#ffcc00';  // Reset input border color
    result.textContent = '';  // Clear previous result message
}

// Event listener for input field
inputField.addEventListener('input', function() {
    // Check if the typed value matches the current word
    if (inputField.value === words[currentWordIndex]) {
        result.textContent = 'Correct!';
        result.style.color = '#008000';  // Green for correct typing
        inputField.style.borderColor = '#008000';  // Green border for correct input
        currentWordIndex++;  // Move to the next word
        if (currentWordIndex < words.length) {
            setTimeout(() => { 
                setNewWord();
                inputField.value = '';  // Clear input field for the next word
            }, 500);  // Add slight delay for user to see "Correct!" message
        } else {
            result.textContent = 'You finished all the words! Congrats!';
            result.style.color = '#ff6f61';  // Red for final message
        }
    } else {
        result.textContent = 'Keep trying!';
        result.style.color = '#ff0000';  // Red for incorrect typing
        inputField.style.borderColor = '#ff0000';  // Red border for incorrect input
    }
});

// Initialize the first word
setNewWord();

