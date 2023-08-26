
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HomeDetails from "./components/HomeDetails";
// import PasswordInput from "./components/Input/Index";
import Navigation from "./components/Navigation";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom"



function App() {
  return (
    <>
      <Router>
        <Navigation />
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
