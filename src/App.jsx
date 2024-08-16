import { useState } from "react";
import "./App.css";
import Categories from "./components/Categories/Categories";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import TopInfoBanner from "./components/TopInfoBanner/TopInfoBanner";

function App() {
  const [productCategory, setProductCategory] = useState("jewelery");
  function handleCategory(string) {
    setProductCategory(string);
  }
  return (
    <>
      <header>
        <TopInfoBanner />
        <Navbar />
        <Hero />
      </header>
      <main>
        <Categories handleCategory={handleCategory} />
        <Products category={productCategory} />
      </main>
    </>
  );
}

export default App;
