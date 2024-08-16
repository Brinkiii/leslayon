import "./Hero.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import ImageSwitcher from "../ImageSwitcher/ImageSwitcher";
import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function Hero() {
  const theme = createTheme({});
  const [checked, setChecked] = useState(1);

  function handleSwitch(number) {
    setChecked(number);
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        display="flex"
        alignItems="center"
        justifyContent="center"
        className="hero-container"
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
        <Grid
          xs={12}
          sm={6}
          md={4}
          lg={3}
          display="flex"
          justifyContent="center"
          alignItems="center"
          className="left"
        >
          <blockquote className="claim">
            <p>SHOP</p>
            <p>STYLE</p>
            <p>SLAY</p>
          </blockquote>
        </Grid>
        <Grid
          xs={12}
          sm={6}
          md={4}
          lg={6}
          display="flex"
          justifyContent="center"
          className="img-container"
        >
          <TransitionGroup className="transition-group">
            <CSSTransition key={checked} classNames="fade" timeout={500}>
              <img
                src={`/hero-${checked}.png`}
                alt={`Hero Image ${checked}`}
                className="fade-image"
              />
            </CSSTransition>
          </TransitionGroup>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={4}
          lg={3}
          display="flex"
          justifyContent="center"
          className="right"
        >
          <div>
            <h1>LESLAYON</h1>
            <p>
              Erlebe den ultimativen Style und Ausdruck mit LESLAYON – wo Mode
              auf Selbstbewusstsein trifft. Unsere Kollektionen sind für euch,
              die mit jedem Look Stil und Stärke ausstrahlt. Werde Teil unserer
              Vision und finde deinen eigenen Weg, um zu glänzen und zu
              inspirieren.
              <span>SHOP. STYLE. SLAY.</span>
            </p>
            <ImageSwitcher handleSwitch={handleSwitch} />
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
