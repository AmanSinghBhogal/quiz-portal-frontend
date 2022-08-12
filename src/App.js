import React, { useEffect , useState} from "react";
import { BrowserRouter as Router, Routes ,Route , Navigate} from "react-router-dom";
import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Profile from "./Components/Profile";
import Organizations from "./Components/Organizations";
import Quizes from "./Components/Quizes";
import Authenticate from "./Components/Authenticate";

const App = () => {
  return (
    <Router>
        <div>
            <NavBar />
            <Routes>

                {/* Home Page Rendering */}
                <Route exact path = "/" element={<Navigate replace to="/home" />} />

                {/* Home */}
                <Route exact path = {`/home`} element = { <Home /> } />

                {/* Profile */}
                <Route exact path = "/profile" element = { <Profile /> } />

                {/* Organizations */}
                <Route exact path = "/organizations" element = { <Organizations /> } /> 

                {/* Quizes */}
                <Route exact path="/quizes" element = { <Quizes /> } /> 

                {/* Auth */}
                <Route exact path="/auth" element = { <Authenticate />} />

            </Routes>
            <Footer />
          </div>
      </Router>
  );
};

export default App;
