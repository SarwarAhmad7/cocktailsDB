import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { UseGlobalContext } from "./Context";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import SingleCocktail from "./components/SingleCocktail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
