import "./assets/styles.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MovieStorage from "./context/MovieStorage";
import Home from "./pages/Home";

function App() {
  return (
    <MovieStorage>
      <Navbar />
      <div className="content">
        <Home />
      </div>
      <Footer />
    </MovieStorage>
  );
}

export default App;
