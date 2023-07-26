import "./assets/styles.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MovieStorage from "./context/MovieStorage";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <MovieStorage>
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </MovieStorage>
  );
}

export default App;
