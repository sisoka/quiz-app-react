import React from 'react';

function QuestionAmountSelect() {
  return (
    <div>
      <div className="class-label">
        <label htmlFor="triviaQuestionAmount">Number Of Questions:</label>
      </div>
      <select id="triviaQuestionAmount" className="drop-down">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
      </select>
    </div>
  );
}

export default QuestionAmountSelect;