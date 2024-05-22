import { createRoot } from 'react-dom/client';
import App from './components/App';


// ReactDOM.render(element, document.querySelector('#root'))
const root = createRoot(document.querySelector('#root'))
root.render(<App/>) // App() | App.render()