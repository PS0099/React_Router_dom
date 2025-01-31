import "./App.css";
import Navbar from "./Compo/Navbar";
import Footer from "./Compo/Footer";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
