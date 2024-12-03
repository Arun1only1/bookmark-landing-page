import Cards from './components/Cards';
import ContactUs from './components/ContactUs';
import Download from './components/Download';
import Faq from './components/Faq';
import Feature2 from './components/Feature2';
import Feature3 from './components/Feature3';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Feature2 />
      <Feature3 />
      <Download />
      <Cards />
      <Faq />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
