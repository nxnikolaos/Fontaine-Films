import "./assets/styles.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieStorage from "./context/MovieStorage";
import Home from "./pages/Home";

function App() {
  return (
    <MovieStorage>
      <Header />
      <div className="content">
        <Home />
      </div>
      <Footer />
    </MovieStorage>
  );
}

export default App;
