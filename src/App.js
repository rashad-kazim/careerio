import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/app.css";
import Error from "./Components/Links/Error";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Purchase from "./Components/Links/Purchase";

function App() {
  return (
    <div className="main_container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/careerio" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/about" element={<Error />} />
          <Route path="/contact" element={<Error />} />
          <Route path="/buy_now" element={<Error />} />
          <Route path="/purchase" element={<Purchase />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
