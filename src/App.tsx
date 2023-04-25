/** @format */

import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import About from "./pages/about/About";
import Navbar from "./components/Navbar";
import { ShoppingCardProvider } from "./context/ShoppingCardContext";

function App() {
  return (
    <ShoppingCardProvider>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCardProvider>
  );
}

export default App;
