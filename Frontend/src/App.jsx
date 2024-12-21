import "./App.css";
import Navbar from "./components/LandingPage/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import { AllGames } from "./components/AllGames/Allgames";
import Footer from "./components/LandingPage/Footer";
import { ErrorPage } from "./components/ErrorPage";
import SignIn from "./components/FormActions/SignIn";
import SignUp from "./components/FormActions/SignUp";
import Purchases from "./components/Purchases"



function App() {
  return (
    <>
 
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/allGames" element={<AllGames></AllGames>}></Route>
            <Route path="/signup" element={<SignUp></SignUp>}></Route>
            <Route path="/signin" element={<SignIn></SignIn>}></Route>
            <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
            <Route path="/purchases" element={<Purchases></Purchases>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
       
    </>
  );
}

export default App;
