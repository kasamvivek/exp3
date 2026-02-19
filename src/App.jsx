import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Analytics from "./pages/Analytics";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  const { state } = useContext(AppContext);

  const appStyle = {
    backgroundColor: state.theme === "light" ? "#f4f6f8" : "#121212",
    color: state.theme === "light" ? "#000000" : "#ffffff",
    minHeight: "100vh",
    transition: "all 0.3s ease"
  };

  return (
    <div style={appStyle}>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </div>
  );
}

export default App;
