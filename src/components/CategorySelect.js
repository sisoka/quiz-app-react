import React from 'react';

function CategorySelect({ categories }) {
  return (
    <div>
      <div className="class-label">
        <label htmlFor="triviaCategory">Category:</label>
      </div>
      <select id="triviaCategory" className="drop-down">
        <option value="any">Any Category</option>
        {categories.map(category => (
          <option key={category.id} value={category.id}>{category.name}</option>
        ))}
      </select>
    </div>
  );
}

export default CategorySelect;