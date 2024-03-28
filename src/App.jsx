import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Analytics />
    </Router>
    
  );
}

export default App;
