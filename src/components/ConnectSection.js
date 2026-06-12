import React from "react";
import {
  Box, Typography, Grid, Paper, Button,
  TextField, InputAdornment, alpha, useTheme,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import RedditIcon from "@mui/icons-material/Reddit";

/* Custom TikTok SVG icon */
function TikTokIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
    </svg>
  );
}

const socialPlatforms = [
  {
    key: "youtube",
    label: "YouTube",
    handle: "@aandmore_writes",
    desc: "Author vlogs, writing process, and Q&As.",
    Icon: YouTubeIcon,
    color: "#ff0000",
    followers: "48K",
  },
  {
    key: "instagram",
    label: "Instagram",
    handle: "@aandmore",
    desc: "Aesthetic shots, book updates, and behind-the-scenes.",
    Icon: InstagramIcon,
    color: "#c41e3a",
    followers: "132K",
  },
  {
    key: "tiktok",
    label: "TikTok",
    handle: "@aandmore",
    desc: "BookTok content, character edits, and chapter readings.",
    Icon: TikTokIcon,
    color: "#69c9d0",
    followers: "291K",
  },
  {
    key: "reddit",
    label: "Reddit",
    handle: "u/AandMoreAuthor",
    desc: "Join the community, AMAs, and reader discussions.",
    Icon: RedditIcon,
    color: "#ff4500",
    followers: "22K",
  },
];

export default function ConnectSection({ author }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      id="connect"
      sx={{
        px: { xs: 3, sm: 5, md: 10 },
        py: { xs: 7, md: 10 },
        background: isDark
          ? "linear-gradient(180deg, #0a0608 0%, #110a0d 100%)"
          : "linear-gradient(180deg, #fdf5f6 0%, #faeaed 100%)",
      }}
    >
      {/* Eyebrow */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Typography sx={{ fontFamily: "'Cinzel', serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: "primary.main" }}>
          STAY CONNECTED
        </Typography>
        <Box sx={{ flex: 1, height: "1px", background: theme.palette.divider }} />
      </Box>

      <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.8rem" }, fontWeight: 700, color: "text.primary", mb: 0.5 }}>
        Find Me in
      </Typography>
      <Typography
        variant="h2"
        sx={{ fontSize: { xs: "2rem", md: "2.8rem" }, fontWeight: 400, fontStyle: "italic", color: "primary.main", mb: 2 }}
      >
        the Darkness.
      </Typography>
      <Typography sx={{ fontSize: "1rem", color: "text.secondary", fontWeight: 300, mb: 6, maxWidth: 480 }}>
        Follow along for new chapters, behind-the-scenes content, and the occasional morally-grey character appreciation post.
      </Typography>

      {/* Social cards */}
      <Grid container spacing={2.5} sx={{ mb: 8 }}>
        {socialPlatforms.map((platform) => (
          <Grid item key={platform.key} xs={12} sm={6} md={3}>
            <Paper
              component="a"
              href={author.social[platform.key]}
              target="_blank"
              rel="noopener noreferrer"
              elevation={0}
              sx={{
                p: 3,
                display: "flex", flexDirection: "column", gap: 1.5,
                border: `1px solid ${theme.palette.divider}`,
                background: isDark ? alpha("#150b0e", 0.8) : "white",
                borderRadius: 2,
                textDecoration: "none",
                height: "100%",
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: alpha(platform.color, 0.5),
                  transform: "translateY(-5px)",
                  boxShadow: isDark
                    ? `0 16px 40px rgba(0,0,0,0.5), 0 0 20px ${alpha(platform.color, 0.15)}`
                    : `0 16px 40px rgba(26,8,16,0.12)`,
                  "& .platform-icon": { color: platform.color },
                  "& .follow-btn": { background: platform.color, color: "white", borderColor: platform.color },
                },
              }}
            >
              {/* Icon + label */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box
                  className="platform-icon"
                  sx={{
                    color: "text.secondary",
                    transition: "color 0.3s",
                    display: "flex", alignItems: "center",
                  }}
                >
                  <platform.Icon size={26} />
                </Box>
                <Box>
                  <Typography sx={{ fontFamily: "'Cinzel', serif", fontSize: "0.72rem", letterSpacing: "0.08em", fontWeight: 600, color: "text.primary" }}>
                    {platform.label}
                  </Typography>
                  <Typography sx={{ fontSize: "0.75rem", color: "text.secondary" }}>
                    {platform.handle}
                  </Typography>
                </Box>
              </Box>

              <Typography sx={{ fontSize: "0.85rem", color: "text.secondary", lineHeight: 1.6, fontWeight: 300, flex: 1 }}>
                {platform.desc}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, color: "text.primary" }}>
                  {platform.followers}
                  <Typography component="span" sx={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.1em", color: "text.secondary", ml: 0.5, fontWeight: 400 }}>
                    FOLLOWERS
                  </Typography>
                </Typography>
                <Button
                  className="follow-btn"
                  size="small"
                  variant="outlined"
                  sx={{
                    fontSize: "0.62rem", px: 1.5, py: 0.4,
                    borderColor: alpha(theme.palette.text.primary, 0.2),
                    color: "text.primary",
                    transition: "all 0.3s",
                    minWidth: 0,
                  }}
                >
                  Follow
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Newsletter signup */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 5 },
          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
          background: isDark
            ? "linear-gradient(135deg, rgba(26,8,16,0.9), rgba(42,10,21,1))"
            : "linear-gradient(135deg, rgba(253,245,246,1), rgba(245,213,219,1))",
          borderRadius: 3,
          textAlign: "center",
          position: "relative", overflow: "hidden",
        }}
      >
        <Box sx={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse at 50% 0%, rgba(196,30,58,0.1) 0%, transparent 60%)",
        }} />
        <Typography sx={{ fontSize: "1.8rem", mb: 1 }}>🌹</Typography>
        <Typography variant="h4" sx={{ fontSize: { xs: "1.3rem", md: "1.7rem" }, fontWeight: 700, color: "text.primary", mb: 0.8 }}>
          Get the first chapter free.
        </Typography>
        <Typography sx={{ fontSize: "0.95rem", color: "text.secondary", mb: 3.5, fontWeight: 300, maxWidth: 420, mx: "auto" }}>
          Subscribe to my newsletter and get a free chapter from my latest release, plus updates on what I'm writing next.
        </Typography>
        <Box
          sx={{
            display: "flex", gap: 1.5, maxWidth: 460, mx: "auto",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <TextField
            placeholder="your@email.com"
            variant="outlined"
            size="small"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                </InputAdornment>
              ),
              sx: {
                fontFamily: "'Cormorant Garamond', serif",
                background: isDark ? "rgba(10,6,8,0.6)" : "white",
                "& input": { fontSize: "0.9rem" },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: alpha(theme.palette.text.primary, 0.15),
                },
              },
            }}
          />
          <Button
            variant="contained" color="primary"
            sx={{ px: 3, py: 1, fontSize: "0.72rem", whiteSpace: "nowrap", flexShrink: 0 }}
          >
            Subscribe
          </Button>
        </Box>
        <Typography sx={{ mt: 1.5, fontSize: "0.7rem", fontFamily: "'Cinzel', serif", letterSpacing: "0.06em", color: "text.secondary" }}>
          No spam. Unsubscribe anytime.
        </Typography>
      </Paper>
    </Box>
  );
}
