import "./App.css";
import Cards from "../src/components/Cards";
import { useState, useEffect } from "react";
import Header from "../src/components/Header";

function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
    console.log(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <Header />
      <Cards products={products} />
    </div>
  );
}

export default App;
