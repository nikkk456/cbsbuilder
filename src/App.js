import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import About from './component/About';
import Location from './component/Location';
import Highlight from './component/Highlight';
import Price from './component/Price';
import Ameneties from './component/Ameneties';
import Floorplan from './component/Floorplan';
import Gallery from './component/Gallery';
import Footer from './component/Footer';
import Footerend from './component/Footerend';
import Callbutton from './component/Callbutton';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Location/>
    <Highlight/>
    <Price/>
    <Ameneties/>
    <Floorplan/>
    <Gallery/>
    <Footer/>
    <Footerend/>
    <Callbutton/>
    </>
  );
}

export default App;
