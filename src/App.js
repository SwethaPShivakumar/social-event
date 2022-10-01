import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Create from './pages/Create';
import Event from './pages/Event';
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/event" element={<Event />} />
          </Routes>
        </Router>
      </header>
      <Footer />
    </div>
  );
}

export default App;
