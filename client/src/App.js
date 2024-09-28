import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Router>
      <Route path="/" element={<HomePage />}/>
    </Router>
  );
}

export default App;
