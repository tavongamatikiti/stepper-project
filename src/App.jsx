import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import NotFound from "./components/NotFound.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="*" component={NotFound} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
