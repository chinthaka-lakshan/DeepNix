import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Home Page/HomePage';
import AboutusPage from './Aboutus Page/AboutusPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutusPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
