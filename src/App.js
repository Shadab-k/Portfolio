
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HomeDetails from "./components/HomeDetails";

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom"
import Navigation from "./components/Navigation";




function App() {
  return (
    <>
      <Router>
        <Navigation/>
        {/* <HomeDetails/>
        <About/>
        <Contact/> */}
        <Routes>
          <Route exact path="/home"
            element={<HomeDetails />} />


          <Route exact path="/about"
            element={<About />} />


          <Route exact path="/contact"
            element={<Contact />} />
        </Routes> 
        <Footer />
      </Router >

    </>
  );
}

export default App;
