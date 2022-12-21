import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/common/Navbar";
import Home from "./components/home";
import About from "./components/about";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
