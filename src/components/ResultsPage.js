import React, { useEffect, useState } from 'react';


const ResultsPage = () => {
  const [quizResults, setQuizResults] = useState([]);

  useEffect(() => {
    const storedResults = JSON.parse(localStorage.getItem('quizResults')) || [];
    setQuizResults(storedResults);
  }, []);

  return (
    <div className="container3">
      <h1>Quiz Results</h1>
      <table id="results-table">
        <thead>
          <tr>
            <th>Question</th>
            <th>Chosen Answer</th>
            <th>Correct Answer</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody id="results-container">
          {quizResults.length === 0 ? (
            <tr>
              <td colSpan="4">No results found. Please take the quiz first.</td>
            </tr>
          ) : (
            quizResults.map((result, index) => (
              <tr key={index}>
                <td dangerouslySetInnerHTML={{ __html: `Question ${index + 1}: ${result.question}` }} />
                <td dangerouslySetInnerHTML={{ __html: result.selectedAnswer }} />
                <td dangerouslySetInnerHTML={{ __html: result.correctAnswer }} />
                <td>
                  <i className={`fas ${result.isCorrect ? 'fa-check correct' : 'fa-times incorrect'}`} />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsPage;