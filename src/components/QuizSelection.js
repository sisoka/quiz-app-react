import React, { useState, useEffect } from 'react';
import CategorySelect from './CategorySelect';
import DifficultySelect from './DifficultySelect';
import QuestionAmountSelect from './QuestionAmountSelect';

function QuizSelection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        let response = await fetch('https://opentdb.com/api_category.php');
        if (response.ok) {
          let categoriesJson = await response.json();
          setCategories(categoriesJson.trivia_categories);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }
    fetchCategories();
  }, []);

  const loadQuizPage = () => {
    const amount = document.querySelector('#triviaQuestionAmount').value;
    const category = document.querySelector('#triviaCategory').value;
    const difficulty = document.querySelector('#triviaDifficulty').value;

    window.location.href = `quizPage.html?amount=${amount}&category=${category}&difficulty=${difficulty}`;
  };

  return (
    <div>
      <h1>Quiz Selection</h1>
      <CategorySelect categories={categories} />
      <DifficultySelect />
      <QuestionAmountSelect />
      <button className="btnStart" onClick={loadQuizPage}>Start Quiz</button>
    </div>
  );
}

export default QuizSelection;