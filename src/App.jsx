import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout.jsx";
import NotFound from "@/components/NotFound.jsx";
import Home from "@/pages/Home.jsx";
import Challenges from "@/pages/Challenges.jsx";
import Gallery from "@/pages/Gallery.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/solution" element={<Challenges />} /> {/* Fixed */}
          <Route path="/about" element={<Gallery />} /> {/* Fixed */}
          <Route path="*" element={<NotFound />} /> {/* Fixed */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
