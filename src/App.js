import './App.css';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/About" element={<About />}/>
            <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

