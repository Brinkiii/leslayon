import { useEffect, useState } from "react";
import "./Categories.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import DiamondIcon from "@mui/icons-material/Diamond";
import MensClothingIcon from "../../assets/MensClothingIcon";
import WomensClothingIcon from "../../assets/WomensClothingIcon";

export default function Categories({ handleCategory }) {
  const theme = createTheme({});

  const categoryMap = {
    jewelery: "jewelery",
    "men's clothing": "men%27s%20clothing",
    "women's clothing": "women%27s%20clothing",
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const filteredCategories = data.filter(
          (category) => category !== "electronics"
        );
        setCategories(filteredCategories);
        console.log(filteredCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="category-container">
        <h2>Our categories</h2>
        <Grid
          container
          className="category-list"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            px: {
              xs: 1,
              sm: 2,
              md: 4,
              lg: 8,
              xl: 16,
            },
          }}
        >
          {categories.map((category) => {
            const categoryUrl = categoryMap[category] || category;

            return (
              <Grid key={category}>
                <a
                  className="category-item"
                  href={`/${categoryUrl}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleCategory(category);
                  }}
                >
                  {category === "jewelery" ? (
                    <DiamondIcon />
                  ) : category === "men's clothing" ? (
                    <MensClothingIcon />
                  ) : category === "women's clothing" ? (
                    <WomensClothingIcon />
                  ) : (
                    <span>No icon available</span>
                  )}
                  {category}
                </a>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </ThemeProvider>
  );
}
