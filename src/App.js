
import './App.css';
import Form from './component/Form';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

function App() {
  return (
    <div className="container">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/form" element={<Form/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
