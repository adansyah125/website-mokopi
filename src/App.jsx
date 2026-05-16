import About from "./components/About";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Outlet from "./components/Outlet";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <>
    <Navbar />
     <Home />
     <About />
     <Menu />
     <Outlet />
     <Gallery />
     <Footer />
    </>
  );
}