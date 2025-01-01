import React, { useState } from 'react';

function FlashcardApp() {
  const [flashcards, setFlashcards] = useState([
    { question: "What is the CPU?", answer: "The brain of the computer." },
    { question: "What is RAM?", answer: "Short-term memory for the computer." },
    { question: "What is the function of the motherboard?", answer: "Connects and supports all components." },
    // Add more flashcards here
  ]);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentCard = flashcards[currentCardIndex];

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    setShowAnswer(false); // Hide the answer for the next card
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div>
      <h1>Flashcard App</h1>
      <div>
        <h3>{currentCard.question}</h3>
        {showAnswer && <p>{currentCard.answer}</p>}
        <button onClick={handleShowAnswer}>Show Answer</button>
      </div>
      <button onClick={handleNextCard}>Next Card</button>
    </div>
  );
}

export default FlashcardApp;
