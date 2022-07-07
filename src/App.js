import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import CardDetail from "./pages/CardDetail";
import FoodDetail from './pages/FoodDetail';





function App() {
  return (
    <>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/foods"} element={<CardDetail />} />
          <Route path={"/foods/:idMeal"} element={<FoodDetail />} />
        </Routes>
      <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
