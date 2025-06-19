import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Clients from "./pages/Clients";
import AnnouncementBanner from "./components/AnnouncementBanner";
import About from "./pages/About";
import Research from "./pages/Research";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <AnnouncementBanner />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
