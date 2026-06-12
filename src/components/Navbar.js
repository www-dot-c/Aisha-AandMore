import React, { useState } from "react";
import {
  AppBar, Toolbar, Typography, Box, IconButton, Button,
  Tooltip, Drawer, List, ListItem, ListItemText,
  Divider, useScrollTrigger, Slide, alpha, useTheme,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navLinks = [
  { label: "About",      id: "about" },
  { label: "Books",      id: "books" },
  { label: "Journey",    id: "journey" },
  { label: "Reviews",    id: "reviews" },
  { label: "Connect",    id: "connect" },
];

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return <Slide appear={false} direction="down" in={!trigger}>{children}</Slide>;
}

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Navbar({ mode, onToggleMode }) {
  const theme = useTheme();
  const isDark = mode === "dark";
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            background: isDark ? "rgba(10,6,8,0.9)" : "rgba(253,245,246,0.92)",
            backdropFilter: "blur(14px)",
            borderBottom: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Toolbar sx={{ px: { xs: 2, md: 5 }, minHeight: "64px !important", gap: 2 }}>
            {/* Logo */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <FavoriteIcon sx={{ color: "primary.main", fontSize: 20 }} />
              <Typography sx={{
                fontFamily: "'Playfair Display', serif", fontWeight: 700,
                fontSize: "1.15rem", color: "text.primary",
                "& span": { color: "primary.main", fontStyle: "italic" },
              }}>
                Aisha — <span>AandMore</span>
              </Typography>
            </Box>

            {/* Desktop nav */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5, ml: 4 }}>
              {navLinks.map((l) => (
                <Button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  sx={{
                    color: "text.secondary", fontSize: "0.72rem",
                    fontFamily: "'Cinzel', serif", letterSpacing: "0.07em",
                    "&:hover": { color: "primary.main", background: "transparent" },
                  }}
                >
                  {l.label}
                </Button>
              ))}
            </Box>

            <Box sx={{ flex: 1 }} />

            {/* Theme toggle */}
            <Tooltip title={isDark ? "Light mode" : "Dark mode"}>
              <IconButton onClick={onToggleMode} size="small" sx={{ color: "text.secondary" }}>
                {isDark ? <Brightness7Icon fontSize="small" /> : <Brightness4Icon fontSize="small" />}
              </IconButton>
            </Tooltip>

            {/* CTA */}
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => scrollTo("books")}
              sx={{ display: { xs: "none", sm: "flex" }, px: 2.5 }}
            >
              Read Now
            </Button>

            {/* Hamburger */}
            <IconButton
              sx={{ display: { xs: "flex", md: "none" }, color: "text.primary" }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 250,
            background: theme.palette.background.default,
            px: 2, pt: 2,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography sx={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1rem", color: "text.primary" }}>
            Aisha
          </Typography>
          <IconButton size="small" onClick={() => setDrawerOpen(false)}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 1 }} />
        <List>
          {navLinks.map((l) => (
            <ListItem
              key={l.id}
              disablePadding
              onClick={() => { setDrawerOpen(false); setTimeout(() => scrollTo(l.id), 200); }}
              sx={{ cursor: "pointer", borderRadius: 1, mb: 0.5, px: 1,
                "&:hover": { background: alpha(theme.palette.primary.main, 0.08) } }}
            >
              <ListItemText
                primary={l.label}
                primaryTypographyProps={{ fontFamily: "'Cinzel', serif", fontSize: "0.78rem", letterSpacing: "0.07em", color: "text.primary" }}
              />
            </ListItem>
          ))}
        </List>
        <Divider sx={{ my: 1 }} />
        <Button
          fullWidth variant="contained" color="primary" size="small"
          onClick={() => { setDrawerOpen(false); setTimeout(() => scrollTo("books"), 200); }}
          sx={{ mt: 1 }}
        >
          Read Now
        </Button>
        <Box sx={{ mt: 2, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Typography variant="caption" sx={{ fontFamily: "'Cinzel', serif", fontSize: "0.65rem", letterSpacing: "0.08em", color: "text.secondary" }}>
            {isDark ? "Dark Mode" : "Light Mode"}
          </Typography>
          <IconButton onClick={onToggleMode} size="small">
            {isDark ? <Brightness7Icon fontSize="small" /> : <Brightness4Icon fontSize="small" />}
          </IconButton>
        </Box>
      </Drawer>
    </>
  );
}
