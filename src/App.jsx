import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout.jsx";
import NotFound from "@/components/NotFound.jsx";
import Home from "@/pages/Home.jsx";
import Challenges from "@/pages/Challenges.jsx";
import Gallery from "@/pages/Gallery.jsx";
import AboutPage from "@/pages/AboutPage.jsx";
import ContactPage from "@/pages/Contact.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/solution" element={<Challenges />} /> {/* Fixed */}
          <Route path="/gallery" element={<Gallery />} /> {/* Fixed */}
          <Route path="/about" element={<AboutPage />} /> {/* Fixed */}
          <Route path="/contact" element={<ContactPage />} /> {/* Fixed */}
          <Route path="*" element={<NotFound />} /> {/* Fixed */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
