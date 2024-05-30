import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuizSelection from './QuizSelection';
import QuizPage from './QuizPage';
import ResultsPage from './ResultsPage';
import './styles.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/quiz" element={<QuizPage />}>
                </Route>
                <Route path="/" element={<div className="container"><QuizSelection /></div>}>
                </Route>
                <Route path="/results" element={<ResultsPage />}>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;