import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AllListingsPage from './pages/AllListingsPage';

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-listings" element={<AllListingsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;