import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Introduction from './sections/Introduction';
import Journey from './sections/Journey';
import Skills from './sections/Skills';
import ContactProof from './sections/ContactProof';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-gray-900">
      <Navbar />
      <Hero />
      <Introduction />
      <Journey />
      <Skills />
      <ContactProof />
      <Footer />
    </div>
  );
}

export default App;