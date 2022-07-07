import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import CardDetail from "./pages/CardDetail";





function App() {
  return (
    <>
    <Nav />
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/foods"} element={<CardDetail />} />
      </Routes>
    </BrowserRouter>
    <Footer />

    </>
  );
}

export default App;
