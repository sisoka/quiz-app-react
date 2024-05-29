import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Question from './Question';

function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchQuestions() {
      const url = generateApiUrl(location.search);
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setQuestions(data.results);
        } else {
          console.error('Failed to fetch questions');
        }
      } catch (error) {
        console.error('Error fetching questions:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchQuestions();
  }, [location.search]);

  const generateApiUrl = (search) => {
    const queryParams = new URLSearchParams(search);
    let amount = queryParams.get('amount');
    let category = queryParams.get('category');
    let difficulty = queryParams.get('difficulty');
    let url = `https://opentdb.com/api.php?type=multiple&amount=${amount}`;
    if (category !== "any") url += `&category=${category}`;
    if (difficulty !== "any") url += `&difficulty=${difficulty}`;
    return url;
  };

  const handleNextQuestion = (selectedAnswer) => {
    const correctAnswer = questions[currentQuestionIndex].correct_answer;
    setUserAnswers([...userAnswers, {
      question: questions[currentQuestionIndex].question,
      selectedAnswer,
      correctAnswer,
      isCorrect: selectedAnswer === correctAnswer
    }]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      localStorage.setItem('quizResults', JSON.stringify(userAnswers));
      navigate('/results');
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container-background">
      <div className="container">
        <div className="progress-bar">
          <div className="progress-bar-inner" style={{ width: `${(currentQuestionIndex + 1) / questions.length * 100}%` }}></div>
        </div>
        <div className="question-number">Question {currentQuestionIndex + 1} of {questions.length}</div>
        <Question
          question={questions[currentQuestionIndex]}
          onNextQuestion={handleNextQuestion}
        />
        <div className="button-container">
          <button className="next-button" onClick={() => handleNextQuestion(document.querySelector('input:checked').value)}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
