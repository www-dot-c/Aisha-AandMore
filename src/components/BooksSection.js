import React, { useState } from "react";
import {
  Box, Typography, Grid, Card, CardMedia, CardContent,
  Chip, Rating, Button, alpha, useTheme,
} from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function BooksSection({ books }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [hovered, setHovered] = useState(null);

  return (
    <Box
      id="books"
      sx={{
        px: { xs: 3, sm: 5, md: 10 },
        py: { xs: 7, md: 10 },
        background: isDark ? "#110a0d" : "white",
      }}
    >
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Typography sx={{ fontFamily: "'Cinzel', serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: "primary.main" }}>
          THE CATALOGUE
        </Typography>
        <Box sx={{ flex: 1, height: "1px", background: theme.palette.divider }} />
      </Box>

      <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.8rem" }, fontWeight: 700, color: "text.primary", mb: 0.5 }}>
        Books
      </Typography>
      <Typography
        sx={{ fontSize: { xs: "1rem", md: "1.1rem" }, color: "text.secondary", fontWeight: 300, mb: 6, maxWidth: 500 }}
      >
        Every story is a descent. Every ending is earned.
      </Typography>

      <Grid container spacing={{ xs: 2, md: 3 }}>
        {books.map((book) => (
          <Grid item key={book.id} xs={6} sm={4} md={4} lg={2}>
            <Card
              onMouseEnter={() => setHovered(book.id)}
              onMouseLeave={() => setHovered(null)}
              sx={{
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                aspectRatio: "2/3",
                border: `1px solid ${hovered === book.id ? alpha(theme.palette.primary.main, 0.4) : theme.palette.divider}`,
                boxShadow: hovered === book.id
                  ? isDark
                    ? "0 20px 45px rgba(0,0,0,0.7), 0 0 20px rgba(196,30,58,0.18)"
                    : "0 20px 45px rgba(26,8,16,0.2)"
                  : "none",
              }}
            >
              <CardMedia
                component="img"
                image={book.cover}
                alt={book.title}
                sx={{
                  position: "absolute", inset: 0,
                  width: "100%", height: "100%", objectFit: "cover",
                  transition: "transform 0.5s ease",
                  transform: hovered === book.id ? "scale(1.06)" : "scale(1)",
                }}
              />
              {/* Gradient */}
              <Box sx={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 55%, transparent 100%)",
              }} />

              {/* Badge */}
              {book.badge && (
                <Chip
                  label={book.badge} size="small"
                  sx={{
                    position: "absolute", top: 10, left: 10,
                    height: 20, fontSize: "0.58rem",
                    fontFamily: "'Cinzel', serif", letterSpacing: "0.04em",
                    background: "linear-gradient(135deg, #c41e3a, #e8354a)",
                    color: "white",
                    "& .MuiChip-label": { px: 0.8 },
                  }}
                />
              )}

              <CardContent sx={{ position: "absolute", bottom: 0, left: 0, right: 0, p: "10px !important" }}>
                <Typography sx={{
                  fontFamily: "'Playfair Display', serif", fontStyle: "italic",
                  fontSize: { xs: "0.9rem", sm: "1rem" }, fontWeight: 600,
                  color: "white", lineHeight: 1.1, mb: 0.2,
                }}>
                  {book.title}
                </Typography>
                {book.subtitle && (
                  <Typography sx={{
                    fontFamily: "'Cinzel', serif", fontSize: "0.56rem",
                    letterSpacing: "0.14em", color: "rgba(255,255,255,0.6)", mb: 0.5,
                  }}>
                    {book.subtitle}
                  </Typography>
                )}
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 0.5 }}>
                  <Rating
                    value={book.rating} readOnly precision={0.1} max={5} size="small"
                    sx={{
                      "& .MuiRating-iconFilled": { color: "#c9a84c" },
                      "& .MuiRating-iconEmpty": { color: "rgba(255,255,255,0.25)" },
                      fontSize: "0.72rem",
                    }}
                  />
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.3 }}>
                    <VisibilityIcon sx={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }} />
                    <Typography sx={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.45)" }}>{book.reads}</Typography>
                  </Box>
                </Box>
              </CardContent>

              {/* Hover overlay */}
              <Box
                sx={{
                  position: "absolute", inset: 0,
                  background: "rgba(0,0,0,0.65)",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  gap: 1.5, p: 2,
                  opacity: hovered === book.id ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <Typography sx={{
                  fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
                  fontSize: "0.85rem", color: "rgba(255,255,255,0.8)",
                  textAlign: "center", lineHeight: 1.5,
                }}>
                  {book.description}
                </Typography>
                <Button
                  variant="contained" size="small"
                  startIcon={<AutoStoriesIcon sx={{ fontSize: 13 }} />}
                  sx={{ fontSize: "0.65rem", px: 2, py: 0.6 }}
                >
                  Read Now
                </Button>
                <Button
                  size="small"
                  startIcon={<FavoriteBorderIcon sx={{ fontSize: 13 }} />}
                  sx={{
                    fontSize: "0.65rem", px: 2, py: 0.6,
                    color: "rgba(255,255,255,0.7)",
                    borderColor: "rgba(255,255,255,0.3)",
                    border: "1px solid",
                    "&:hover": { borderColor: "white", color: "white" },
                  }}
                >
                  Save
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* View all */}
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Button
          variant="outlined" size="large"
          sx={{
            px: 4, py: 1.3, fontSize: "0.75rem",
            borderColor: alpha(theme.palette.text.primary, 0.2),
            color: "text.primary",
            "&:hover": { borderColor: "primary.main", color: "primary.main", background: "transparent" },
          }}
        >
          View Full Catalogue
        </Button>
      </Box>
    </Box>
  );
}
