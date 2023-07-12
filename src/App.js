import "./assets/styles.css";
import MovieStorage from "./context/MovieStorage";
import Home from "./pages/Home";

function App() {
  return (
    <MovieStorage>
      <Home />
    </MovieStorage>
  );
}

export default App;
