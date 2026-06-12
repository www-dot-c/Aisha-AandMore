import React from "react";
import {
  Box, Typography, Divider, IconButton,
  Tooltip, alpha, useTheme,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import RedditIcon from "@mui/icons-material/Reddit";

function TikTokIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
    </svg>
  );
}

const socials = [
  { Icon: YouTubeIcon,   label: "YouTube",   href: "https://youtube.com",   color: "#ff0000" },
  { Icon: InstagramIcon, label: "Instagram", href: "https://instagram.com", color: "#c41e3a" },
  { Icon: TikTokIcon,    label: "TikTok",    href: "https://tiktok.com",    color: "#69c9d0" },
  { Icon: RedditIcon,    label: "Reddit",    href: "https://reddit.com",    color: "#ff4500" },
];

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        background: "#0a0608",
        px: { xs: 3, sm: 5, md: 10 },
        pt: 5, pb: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { sm: "center" },
          justifyContent: "space-between",
          gap: 3, mb: 3,
        }}
      >
        {/* Brand */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <FavoriteIcon sx={{ color: "#c41e3a", fontSize: 18 }} />
          <Typography sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700, fontSize: "1.1rem", color: "white",
            fontStyle: "italic",
          }}>
            Aisha — AandMore
          </Typography>
        </Box>

        {/* Tagline */}
        <Typography sx={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic", fontSize: "0.95rem",
          color: "rgba(240,230,232,0.4)",
        }}>
          "I write the darkness you crave."
        </Typography>

        {/* Social icons */}
        <Box sx={{ display: "flex", gap: 0.5 }}>
          {socials.map(({ Icon, label, href, color }) => (
            <Tooltip key={label} title={label}>
              <IconButton
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  color: "rgba(240,230,232,0.45)",
                  transition: "color 0.2s, background 0.2s",
                  "&:hover": {
                    color: color,
                    background: alpha(color, 0.12),
                  },
                }}
              >
                <Icon />
              </IconButton>
            </Tooltip>
          ))}
        </Box>
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.07)", mb: 3 }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { sm: "center" },
          gap: 1,
        }}
      >
        <Typography sx={{ fontSize: "0.72rem", color: "rgba(240,230,232,0.28)" }}>
          © 2024 Aisha. All rights reserved.
        </Typography>
        <Typography sx={{ fontSize: "0.72rem", color: "rgba(240,230,232,0.28)", fontFamily: "'Cinzel', serif", letterSpacing: "0.06em" }}>
          Built with 🌹 on LoveReads
        </Typography>
      </Box>
    </Box>
  );
}
