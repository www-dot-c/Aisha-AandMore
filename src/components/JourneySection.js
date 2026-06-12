import React from "react";
import {
  Box, Typography, Paper, alpha, useTheme,
} from "@mui/material";
import { timelineItems } from "../data/authorData";

export default function JourneySection() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      id="journey"
      sx={{
        px: { xs: 3, sm: 5, md: 10 },
        py: { xs: 7, md: 10 },
        background: isDark
          ? "linear-gradient(180deg, #110a0d 0%, #0a0608 100%)"
          : "linear-gradient(180deg, #faeaed 0%, #fdf5f6 100%)",
      }}
    >
      {/* Eyebrow */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Typography sx={{ fontFamily: "'Cinzel', serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: "primary.main" }}>
          THE JOURNEY
        </Typography>
        <Box sx={{ flex: 1, height: "1px", background: theme.palette.divider }} />
      </Box>

      <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.8rem" }, fontWeight: 700, color: "text.primary", mb: 0.5 }}>
        From Hobby
      </Typography>
      <Typography
        variant="h2"
        sx={{ fontSize: { xs: "2rem", md: "2.8rem" }, fontWeight: 400, fontStyle: "italic", color: "primary.main", mb: 6 }}
      >
        to Bestseller.
      </Typography>

      {/* Timeline */}
      <Box sx={{ position: "relative", maxWidth: 860, mx: "auto" }}>
        {/* Vertical line */}
        <Box
          sx={{
            position: "absolute",
            left: { xs: 20, md: "50%" },
            top: 0, bottom: 0,
            width: 1,
            background: `linear-gradient(to bottom, transparent, ${theme.palette.primary.main} 10%, ${theme.palette.primary.main} 90%, transparent)`,
            opacity: 0.3,
            transform: { md: "translateX(-50%)" },
          }}
        />

        {timelineItems.map((item, i) => {
          const isLeft = i % 2 === 0;
          return (
            <Box
              key={i}
              sx={{
                display: "flex",
                flexDirection: { xs: "row", md: isLeft ? "row" : "row-reverse" },
                alignItems: "flex-start",
                mb: 5,
                pl: { xs: 6, md: 0 },
                gap: { md: 4 },
              }}
            >
              {/* Content */}
              <Box sx={{ flex: 1, textAlign: { xs: "left", md: isLeft ? "right" : "left" } }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 2.5, md: 3 },
                    border: `1px solid ${theme.palette.divider}`,
                    background: isDark ? alpha("#150b0e", 0.8) : "white",
                    borderRadius: 2,
                    transition: "border-color 0.2s, box-shadow 0.2s",
                    "&:hover": {
                      borderColor: alpha(theme.palette.primary.main, 0.4),
                      boxShadow: isDark
                        ? `0 8px 30px rgba(0,0,0,0.4), 0 0 15px rgba(196,30,58,0.1)`
                        : `0 8px 30px rgba(26,8,16,0.1)`,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Cinzel', serif", fontSize: "0.62rem",
                      letterSpacing: "0.14em", color: "primary.main", mb: 0.8,
                    }}
                  >
                    {item.year}
                  </Typography>
                  <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: 700, color: "text.primary", mb: 0.6 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: "0.88rem", color: "text.secondary", lineHeight: 1.65, fontWeight: 300 }}>
                    {item.desc}
                  </Typography>
                </Paper>
              </Box>

              {/* Dot */}
              <Box
                sx={{
                  flexShrink: 0,
                  width: 14, height: 14,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #c41e3a, #e8354a)",
                  boxShadow: `0 0 12px rgba(196,30,58,0.5)`,
                  position: { xs: "absolute", md: "relative" },
                  left: { xs: 14 },
                  mt: { xs: 3, md: 3.5 },
                  zIndex: 1,
                }}
              />

              {/* Empty flex for the other side (desktop only) */}
              <Box sx={{ flex: 1, display: { xs: "none", md: "block" } }} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
