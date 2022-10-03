import './App.css';
import Home from './pages/Home';
import './styles/dist/main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Events from './pages/Events';

function App() {
  
  return (
    <Router>
      <div>
        <Routes>
          <Route element={<Home />} path="/" loading/>
          <Route element={<Events />} path="/events"/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
