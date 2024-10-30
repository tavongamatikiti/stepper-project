import Navbar from "../components/Navbar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer.jsx";

const MainLayout = () => {
  return (
    <section className="min-h-[100dvh] flex flex-col overflow-hidden">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
};

export default MainLayout;
