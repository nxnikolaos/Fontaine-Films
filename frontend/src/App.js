import "./assets/styles.css";
import Footer from "./components/Footer";
import MovieDetails from "./pages/MovieDetails";
import Navbar from "./components/navigation/Navbar";
import ImageConfig from "./context/ImageConfig";
import StateLoader from "./context/StateLoader";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ImageConfig>
      <StateLoader>
        <Router>
          <Navbar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/movies/:id" element={<MovieDetails />}></Route>
            </Routes>
          </main>
          <Footer />
        </Router>
      </StateLoader>
    </ImageConfig>
  );
}

export default App;
