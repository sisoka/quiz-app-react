import React, { useState } from 'react';

function Question({ question, onNextQuestion }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const options = [...question.incorrect_answers];
  const correctAnswer = question.correct_answer;
  const randomIndex = Math.floor(Math.random() * 4);
  options.splice(randomIndex, 0, correctAnswer);

  return (
    <div>
      <div className="question-title" dangerouslySetInnerHTML={{ __html: question.question }} />
      <form id="options-form">
        {options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`option${index}`}
              name="answer"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
            />
            <label htmlFor={`option${index}`} dangerouslySetInnerHTML={{ __html: option }} />
          </div>
        ))}
      </form>
    </div>
  );
}

export default Question;
