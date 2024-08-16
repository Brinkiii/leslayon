import { useState, useEffect } from "react";

export default function NavLinks() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      const filteredCategories = data.filter(
        (category) => category !== "electronics"
      );
      setCategories(filteredCategories);
    };

    fetchData();
  }, []);

  return (
    <ul className="navlinks">
      {categories.map((category) => (
        <li key={category}>
          <a href={`/${category}`}>{category}</a>
        </li>
      ))}
    </ul>
  );
}
