import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Agents from './components/Agents';
import Listings from './components/Listings';
import Contact from "./components/Contact";
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Agents />
      <Listings />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;