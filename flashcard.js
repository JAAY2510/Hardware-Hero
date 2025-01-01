// Array of flashcards (replace with your own data)
const flashcards = [
  { question: "What is the CPU?", answer: "The brain of the computer." },
  { question: "What is RAM?", answer: "Short-term memory for the computer." },
  { question: "What is the function of the motherboard?", answer: "Connects and supports all components." },
  // Add more flashcards here
];

// Function to display a random flashcard
function displayFlashcard() {
  const randomIndex = Math.floor(Math.random() * flashcards.length);
  const currentCard = flashcards[randomIndex];

  // Update the HTML to display the question
  const questionElement = document.getElementById('question');
  questionElement.textContent = currentCard.question;

  // Initially hide the answer
  const answerElement = document.getElementById('answer');
  answerElement.textContent = ""; 
}

// Initial display
displayFlashcard(); 

// Event listener for the "Show Answer" button (optional)
const showAnswerButton = document.getElementById('showAnswer');
showAnswerButton.addEventListener('click', () => {
  const answerElement = document.getElementById('answer');
  answerElement.textContent = flashcards[randomIndex].answer; 
});
