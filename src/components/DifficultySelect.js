import React from 'react';

function DifficultySelect() {
  return (
    <div>
      <div className="class-label">
        <label htmlFor="triviaDifficulty">Difficulty:</label>
      </div>
      <select id="triviaDifficulty" className="drop-down">
        <option value="any">Any Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
}

export default DifficultySelect;