import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Check from "./components/checkoutpage/Check";


import "./styles/header.scss";
import "./styles/footer.css";

import "./styles/product.css";
import ProductList from "./components/product/ProductList";
import ProductCard from "./components/product/Productcard";
import Footer from "./components/footer/Footer";

import Login from "./components/login/Login";




function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Check />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductCard />} />
        <Route path="/login" element={<Login/>} />
        
       
        
        
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
