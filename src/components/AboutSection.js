import React from "react";
import {
  Box, Typography, Grid, Chip, Paper, Divider,
  alpha, useTheme,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

export default function AboutSection({ author }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const paragraphs = author.bio.split("\n\n").filter(Boolean);

  return (
    <Box
      id="about"
      sx={{
        px: { xs: 3, sm: 5, md: 10 },
        py: { xs: 7, md: 10 },
        background: isDark
          ? "linear-gradient(180deg, #0a0608 0%, #110a0d 100%)"
          : "linear-gradient(180deg, #fdf5f6 0%, #faeaed 100%)",
      }}
    >
      {/* Section eyebrow */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 6 }}>
        <Typography sx={{ fontFamily: "'Cinzel', serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: "primary.main" }}>
          THE AUTHOR
        </Typography>
        <Box sx={{ flex: 1, height: "1px", background: theme.palette.divider }} />
      </Box>

      <Grid container spacing={{ xs: 5, md: 8 }} alignItems="flex-start">
        {/* Left: photo + meta */}
        <Grid item xs={12} md={4}>
          <Box sx={{ position: "relative", display: "inline-block", width: "100%", maxWidth: 340 }}>
            {/* Decorative corner lines */}
            <Box sx={{
              position: "absolute", top: -8, left: -8,
              width: 40, height: 40,
              borderTop: `2px solid ${theme.palette.primary.main}`,
              borderLeft: `2px solid ${theme.palette.primary.main}`,
            }} />
            <Box sx={{
              position: "absolute", bottom: -8, right: -8,
              width: 40, height: 40,
              borderBottom: `2px solid ${theme.palette.primary.main}`,
              borderRight: `2px solid ${theme.palette.primary.main}`,
            }} />

            <Box
              component="img"
              src={author.profileImg}
              alt={author.name}
              sx={{
                width: "100%",
                aspectRatio: "3/4",
                objectFit: "cover",
                objectPosition: "center top",
                borderRadius: 2,
                display: "block",
                boxShadow: isDark
                  ? "0 20px 50px rgba(0,0,0,0.6)"
                  : "0 20px 50px rgba(26,8,16,0.15)",
              }}
            />
          </Box>

          {/* Meta info */}
          <Paper
            elevation={0}
            sx={{
              mt: 3, p: 2.5,
              border: `1px solid ${theme.palette.divider}`,
              background: isDark ? alpha("#150b0e", 0.8) : "white",
              borderRadius: 2,
              maxWidth: 340,
            }}
          >
            {[
              { icon: <LocationOnIcon sx={{ fontSize: 15, color: "primary.main" }} />, text: author.location },
              { icon: <CalendarMonthIcon sx={{ fontSize: 15, color: "primary.main" }} />, text: `Writing since ${author.memberSince}` },
              { icon: <AutoStoriesIcon sx={{ fontSize: 15, color: "primary.main" }} />, text: "14 published titles" },
            ].map((item, i) => (
              <Box key={i}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, py: 1 }}>
                  {item.icon}
                  <Typography sx={{ fontSize: "0.85rem", color: "text.secondary", fontWeight: 300 }}>
                    {item.text}
                  </Typography>
                </Box>
                {i < 2 && <Divider sx={{ borderColor: theme.palette.divider }} />}
              </Box>
            ))}
          </Paper>

          {/* Genres */}
          <Box sx={{ mt: 2.5, maxWidth: 340 }}>
            <Typography sx={{ fontFamily: "'Cinzel', serif", fontSize: "0.62rem", letterSpacing: "0.14em", color: "text.secondary", mb: 1.2 }}>
              WRITES IN
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
              {author.genres.map((g) => (
                <Chip
                  key={g} label={g} size="small"
                  sx={{
                    background: alpha(theme.palette.primary.main, 0.1),
                    color: "primary.main",
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                    fontSize: "0.62rem",
                  }}
                />
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Right: bio text */}
        <Grid item xs={12} md={8}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.8rem", lg: "3.4rem" },
              fontWeight: 700, color: "text.primary",
              lineHeight: 1.1, mb: 1,
            }}
          >
            The Woman Behind
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.8rem", lg: "3.4rem" },
              fontWeight: 400, fontStyle: "italic",
              color: "primary.main", lineHeight: 1.1, mb: 4,
            }}
          >
            the Darkness.
          </Typography>

          {paragraphs.map((p, i) => (
            <Typography
              key={i}
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                color: "text.secondary", lineHeight: 1.9,
                mb: 2.5, fontWeight: 300,
              }}
            >
              {p}
            </Typography>
          ))}

          {/* Pull quote */}
          <Box
            sx={{
              mt: 4, p: 3,
              borderLeft: `3px solid ${theme.palette.primary.main}`,
              background: alpha(theme.palette.primary.main, 0.05),
              borderRadius: "0 8px 8px 0",
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic", fontSize: { xs: "1.2rem", md: "1.4rem" },
                color: "text.primary", fontWeight: 300, lineHeight: 1.6,
              }}
            >
              "The best love stories are the ones that scare you a little — and make you want more anyway."
            </Typography>
            <Typography sx={{ mt: 1, fontSize: "0.78rem", fontFamily: "'Cinzel', serif", letterSpacing: "0.08em", color: "primary.main" }}>
              — AISHA / AANDMORE
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
