import React from "react";
import {
  Box, Typography, Grid, Paper, Avatar,
  Rating, Chip, alpha, useTheme,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { testimonials } from "../data/authorData";

const platformColors = {
  Reddit:    "#ff4500",
  Instagram: "#c41e3a",
  TikTok:    "#69c9d0",
};

export default function ReviewsSection() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      id="reviews"
      sx={{
        px: { xs: 3, sm: 5, md: 10 },
        py: { xs: 7, md: 10 },
        background: isDark ? "#110a0d" : "white",
      }}
    >
      {/* Eyebrow */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Typography sx={{ fontFamily: "'Cinzel', serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: "primary.main" }}>
          READER LOVE
        </Typography>
        <Box sx={{ flex: 1, height: "1px", background: theme.palette.divider }} />
      </Box>

      <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.8rem" }, fontWeight: 700, color: "text.primary", mb: 0.5 }}>
        What Readers
      </Typography>
      <Typography
        variant="h2"
        sx={{ fontSize: { xs: "2rem", md: "2.8rem" }, fontWeight: 400, fontStyle: "italic", color: "primary.main", mb: 6 }}
      >
        Are Saying.
      </Typography>

      <Grid container spacing={3}>
        {testimonials.map((t) => (
          <Grid item key={t.id} xs={12} sm={6} md={4}>
            <Paper
              elevation={0}
              sx={{
                p: 3.5, height: "100%",
                border: `1px solid ${theme.palette.divider}`,
                background: isDark ? alpha("#150b0e", 0.8) : "#fdf5f6",
                borderRadius: 2,
                display: "flex", flexDirection: "column", gap: 2,
                transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
                "&:hover": {
                  borderColor: alpha(theme.palette.primary.main, 0.45),
                  transform: "translateY(-4px)",
                  boxShadow: isDark
                    ? "0 16px 40px rgba(0,0,0,0.5), 0 0 18px rgba(196,30,58,0.12)"
                    : "0 16px 40px rgba(26,8,16,0.12)",
                },
              }}
            >
              {/* Quote icon */}
              <FormatQuoteIcon
                sx={{
                  fontSize: 32, color: "primary.main",
                  opacity: 0.45, transform: "scaleX(-1)",
                }}
              />

              {/* Stars */}
              <Rating
                value={5} readOnly size="small"
                sx={{
                  "& .MuiRating-iconFilled": { color: "#c9a84c" },
                  fontSize: "0.8rem",
                }}
              />

              {/* Quote */}
              <Typography
                sx={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic", fontSize: "1.05rem",
                  color: "text.primary", lineHeight: 1.7,
                  fontWeight: 300, flex: 1,
                }}
              >
                "{t.quote}"
              </Typography>

              {/* Reviewer */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: 1 }}>
                <Avatar
                  src={t.avatar}
                  sx={{ width: 36, height: 36, border: `2px solid ${alpha(theme.palette.primary.main, 0.3)}` }}
                />
                <Box>
                  <Typography sx={{ fontSize: "0.82rem", fontWeight: 600, color: "text.primary" }}>
                    @{t.reader}
                  </Typography>
                  <Chip
                    label={t.platform}
                    size="small"
                    sx={{
                      height: 16, mt: 0.3,
                      fontSize: "0.55rem",
                      fontFamily: "'Cinzel', serif",
                      letterSpacing: "0.05em",
                      background: alpha(platformColors[t.platform] || "#c41e3a", 0.12),
                      color: platformColors[t.platform] || "#c41e3a",
                      border: `1px solid ${alpha(platformColors[t.platform] || "#c41e3a", 0.25)}`,
                      "& .MuiChip-label": { px: 0.8 },
                    }}
                  />
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
