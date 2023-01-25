import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import { Contact } from "./Pages/Contact/Contact";
import { Products } from "./Pages/Products/Products";
import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";
import { ProductDetails } from "./Pages/ProductDetails/ProductDetails";
import ProductPage from "./Pages/Products/ProductPage";
import NewProductPage from "./Pages/Products/NewProductPage";
import NewShopPage from "./Pages/Products/NewShopPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="space"></div>
      <Switch>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<NewProductPage />} />
          <Route path="/oldPage" element={<ProductPage />} />
          <Route path="/newPage" element={<NewShopPage/>} />
          {/* <Route
            path="/products"
            element={<Products category={""} collection={""} />}
          /> */}
          <Route path="/products" element={<NewProductPage />} />
          {/* Product category */}
          <Route path="/products/category/living-room" element={<Products category={"Living-room"} collection={""} />} />

          

          <Route path="/products/category/kitchen" element={<Products category={"Kitchen"} collection={""} />} />
          <Route path="/products/category/bedroom" element={<Products category={"Bedroom"} collection={""} />} />
          <Route path="/products/category/bathroom" element={<Products category={"Bathroom"} collection={""} />} />
          <Route path="/products/category/hall" element={<Products category={"Hall"} collection={""} />} />
          {/* Product collection */}
          <Route path="/products/collection/mottoe" element={<Products category={""} collection={"Mottoe"} />} />
          <Route path="/products/collection/flora" element={<Products category={""} collection={"Flora"} />} />
          <Route path="/products/collection/alphanso" element={<Products category={""} collection={"Alphanso"} />} />
          <Route path="/products/collection/fazileet" element={<Products category={""} collection={"Fazileet"} />} />
          <Route path="/products/collection/kesluk" element={<Products category={""} collection={"Kesluk"} />} />
          {/* Product details */}
          <Route path="/product-details/:id" element={<ProductDetails />} />
        </Routes>
      </Switch>

      <Footer/>
      
    </div>
  );
}

export default App;
