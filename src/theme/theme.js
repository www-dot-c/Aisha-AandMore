import { createTheme } from "@mui/material/styles";

const crimson = "#c41e3a";
const rose    = "#e8354a";
const gold    = "#c9a84c";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary:   { main: crimson, light: rose, dark: "#8b0000" },
      secondary: { main: gold },
      ...(mode === "dark"
        ? {
            background: { default: "#0a0608", paper: "#150b0e" },
            text: { primary: "#f0e6e8", secondary: "#8a7070" },
            divider: "rgba(196,30,58,0.15)",
          }
        : {
            background: { default: "#fdf5f6", paper: "#ffffff" },
            text: { primary: "#1a0810", secondary: "#6b4f55" },
            divider: "rgba(196,30,58,0.2)",
          }),
    },
    typography: {
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      h1: { fontFamily: "'Playfair Display', serif", fontWeight: 900 },
      h2: { fontFamily: "'Playfair Display', serif", fontWeight: 700 },
      h3: { fontFamily: "'Playfair Display', serif", fontWeight: 700 },
      h4: { fontFamily: "'Playfair Display', serif", fontWeight: 600 },
      h5: { fontFamily: "'Playfair Display', serif", fontWeight: 600 },
      h6: { fontFamily: "'Playfair Display', serif", fontWeight: 600 },
      button: { fontFamily: "'Cinzel', serif", letterSpacing: "0.08em", textTransform: "none" },
    },
    shape: { borderRadius: 6 },
    components: {
      MuiButton: {
        styleOverrides: {
          root: { textTransform: "none", fontFamily: "'Cinzel', serif", letterSpacing: "0.06em", fontSize: "0.78rem" },
          containedPrimary: {
            background: `linear-gradient(135deg, ${crimson}, ${rose})`,
            boxShadow: `0 4px 15px rgba(196,30,58,0.3)`,
            "&:hover": {
              background: `linear-gradient(135deg, ${rose}, ${crimson})`,
              boxShadow: `0 6px 22px rgba(196,30,58,0.45)`,
              transform: "translateY(-1px)",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          },
        },
      },
      MuiAppBar: { styleOverrides: { root: { backgroundImage: "none" } } },
      MuiChip: {
        styleOverrides: {
          root: { fontFamily: "'Cinzel', serif", fontSize: "0.65rem", letterSpacing: "0.05em" },
        },
      },
    },
  });
