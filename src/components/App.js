import '../styles/css/style.css';

import Header from './header/Header';
import Hero from './hero/Hero';
import ShortenURLForm from './shorten-url-form/ShortenURLForm';
import Highlights from './highlights/Highlights';
import Cta from './cta/Cta';
import Footer from './footer/Footer';
import Attribution from './attribution/Attribution';

export default function App() {
  return (
    <>
    <Header/>
    <main className="wrapper">
      <Hero/>
      <ShortenURLForm/>
      <Highlights/>
      <Cta/>
    </main>
    <Footer/>
    <Attribution/>
    </>
  );
}
