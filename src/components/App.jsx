import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PickupForm from "./PickupForm";
import FAQSection from "./FAQSection";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          
          <Route exact path="/">
            <Home />
            <Services />
            <AboutUs />
            <FAQSection />

            <ContactUs />
            <Footer />
          </Route>

         
          <Route path="/login" component={LoginPage}>
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/pickup">
            <PickupForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
