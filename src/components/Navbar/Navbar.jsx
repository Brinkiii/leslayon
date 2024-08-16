import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "../Logo/Logo";
import MobileDrawer from "./MobileDrawer";
import NavLinks from "./NavLinks";

import Grid from "@mui/material/Unstable_Grid2";
import "./Navbar.css";
import SearchCartProfile from "../SearchCartProfile/SearchCartProfile";

export default function Navbar() {
  const theme = createTheme({});

  return (
    <ThemeProvider theme={theme}>
      <div className="navbar">
        <Grid
          container
          spacing={2}
          className="navbar-grid"
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
          <Grid xs={2} md={"auto"}>
            <a href="/">
              <Logo width="40px" height="40px" />
            </a>
          </Grid>
          <Grid md={"auto"} className="navlinks-container">
            <NavLinks />
          </Grid>
          <Grid
            xs={10}
            md={"auto"}
            xsOffset={"auto"}
            mdOffset={0}
            display="flex"
            justifyContent="flex-end"
          >
            <SearchCartProfile />
            <MobileDrawer />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}
