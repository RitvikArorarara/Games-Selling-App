import "./App.css";

import Featured from "./components/LandingPage/Featured";
import Footer from "./components/LandingPage/Footer";
import Hero from "./components/LandingPage/Hero";
import Navbar from "./components/LandingPage/Navbar";
import Updates from "./components/LandingPage/Updates";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Featured></Featured>
      <Updates></Updates>
      <Footer></Footer>
    </>
  );
}

export default App;
