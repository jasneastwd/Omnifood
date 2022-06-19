import './Queries.css';
import './SCSS/General.scss';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import CTA from './Components/CTA';
import Footer from './Components/Footer';
import Pricing from './Components/Pricing';
import Testimonials from './Components/Testimonials';
import Meals from './Components/Meals';
import HowTo from './Components/HowTo';
import './General.css';
import '../src/js/script';

function App() {
  return (
    <div className='App'>
      <Nav />
      <main>
        <Hero />
        <HowTo />
        <Meals />
        <Testimonials />
        <Pricing />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}

export default App;
