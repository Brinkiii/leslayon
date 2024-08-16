import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./Products.css";

export default function Products({ category }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div className="products">
      <h2>Products</h2>
      <ul>
        {loading ? (
          <CircularProgress />
        ) : (
          products.map((product) => (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <p>Price: {product.price}</p>
              <p>Description: {product.description}</p>
              <img src={product.image} alt={product.title} width="200" />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
