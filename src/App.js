
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Home Page/HomePage';
import AboutusPage from './Pages/Aboutus Page/AboutusPage';
import Members from './Pages/Members/Members';
import ContactUs from './Pages/Contact_us/Contact_us';

function App() {
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutusPage />} />
          <Route path="/members" element={<Members/>} />
          <Route path="/contactus" element={<ContactUs/>} />
        </Routes>
      </BrowserRouter>

    <div className="App"/>

    </div>
  );
}

export default App;
