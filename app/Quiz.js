// components/Quiz.js
import React, { useState } from 'react';

const Quiz = () => {
  const questions = [
    // Define your quiz questions here
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz completed, calculate the score or perform any other actions
      console.log('Answers:', answers);
    }
  };

  return (
    <div>
      <h2>Quiz</h2>
      {currentQuestion < questions.length ? (
        <div>
          <h3>{questions[currentQuestion].question}</h3>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index} onClick={() => handleAnswer(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <p>Quiz completed!</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
