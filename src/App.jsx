import useSiteFx from "./hooks/useSiteFx.js";
import Preloader from "./components/Preloader.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import Philosophy from "./components/Philosophy.jsx";
import Menu from "./components/Menu.jsx";
import Story from "./components/Story.jsx";
import Experience from "./components/Experience.jsx";
import Gallery from "./components/Gallery.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Reservation from "./components/Reservation.jsx";
import Visit from "./components/Visit.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  useSiteFx();
  return (
    <>
      <a className="sk" href="#main">Skip to content</a>
      <Preloader />
      <div id="prog" />
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <Philosophy />
        <Menu />
        <Story />
        <Experience />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
