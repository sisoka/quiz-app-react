// import React from "react";
// import QuizSelection from './QuizSelection';
// import './styles.';



// function App(props){
//   return (
//     <div className="container">
//       <QuizSelection/>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuizSelection from './QuizSelection';
import QuizPage from './QuizPage';
import './styles.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/quiz" element={<QuizPage />}>
                    
                </Route>
                <Route path="/" element={<div className="container"><QuizSelection /></div>}>
                    
                </Route>
            </Routes>
        </Router>
    );
}

export default App;