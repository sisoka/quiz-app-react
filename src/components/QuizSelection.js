import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CategorySelect from './CategorySelect';
import DifficultySelect from './DifficultySelect';
import QuestionAmountSelect from './QuestionAmountSelect';

function QuizSelection() {
  const [categories, setCategories] = useState([]);
  const [amount, setAmount] = useState(10);
  const [category, setCategory] = useState('any');
  const [difficulty, setDifficulty] = useState('any');
  const navigate = useNavigate();

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
    navigate(`/quiz?amount=${amount}&category=${category}&difficulty=${difficulty}`);
  };

  return (
    <div>
      <h1>Quiz Selection</h1>
      <CategorySelect categories={categories} setCategory={setCategory} />
      <DifficultySelect setDifficulty={setDifficulty} />
      <QuestionAmountSelect setAmount={setAmount} />
      <button className="btnStart" onClick={loadQuizPage}>Start Quiz</button>
    </div>
  );
}

export default QuizSelection;
