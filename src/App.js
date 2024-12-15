// wilfred monye 
// 301353973

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services"; 
import { About } from './components/About';
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Services /> 
      <Contact />
      <About />
      <Footer />
    </div>
  );
}

export default App;
