import { 
  BrowserRouter as Router,
  Routes, 
  Route 
} from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import Login from "./Pages/Login/Login";
import Sign from "./Pages/Sign/Sign";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/project" element={<Project />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sign" element={<Sign />}></Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
