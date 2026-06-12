import React, { useState, useMemo } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { getTheme } from "./theme/theme";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import BooksSection from "./components/BooksSection";
import JourneySection from "./components/JourneySection";
import ReviewsSection from "./components/ReviewsSection";
import ConnectSection from "./components/ConnectSection";
import Footer from "./components/Footer";
import { author, books } from "./data/authorData";

export default function App() {
  const [mode, setMode] = useState("dark");
  const theme = useMemo(() => getTheme(mode), [mode]);
  const toggleMode = () => setMode((m) => (m === "dark" ? "light" : "dark"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh" }}>
        <Navbar mode={mode} onToggleMode={toggleMode} />
        <HeroSection author={author} mode={mode} />
        <AboutSection author={author} />
        <BooksSection books={books} />
        <JourneySection />
        <ReviewsSection />
        <ConnectSection author={author} />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
