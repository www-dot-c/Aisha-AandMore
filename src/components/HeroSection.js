import React, { useEffect, useRef } from "react";
import { Box, Typography, Button, Chip, alpha, useTheme } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function ParticleCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const particles = Array.from({ length: 28 }, () => ({
      x: Math.random() * 1200, y: Math.random() * 900,
      vy: -(0.2 + Math.random() * 0.6), vx: (Math.random() - 0.5) * 0.3,
      r: 0.8 + Math.random() * 1.8, alpha: Math.random() * 0.6,
      da: (Math.random() > 0.5 ? 1 : -1) * 0.004,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.y += p.vy; p.x += p.vx; p.alpha += p.da;
        if (p.alpha < 0.02 || p.alpha > 0.65) p.da *= -1;
        if (p.y < -5) { p.y = canvas.height + 5; p.x = Math.random() * canvas.width; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(196,30,58,${p.alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);
  return (
    <canvas
      ref={ref}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    />
  );
}

export default function HeroSection({ author, mode }) {
  const theme = useTheme();
  const isDark = mode === "dark";

  return (
    <Box
      sx={{
        position: "relative", minHeight: "100vh",
        display: "flex", alignItems: "center",
        overflow: "hidden", pt: "64px",
      }}
    >
      {/* Background image */}
      <Box
        sx={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${author.coverImg})`,
          backgroundSize: "cover", backgroundPosition: "center 30%",
          filter: isDark ? "brightness(0.18) saturate(0.8)" : "brightness(0.25) saturate(0.6)",
        }}
      />
      {/* Gradient overlay */}
      <Box
        sx={{
          position: "absolute", inset: 0,
          background: isDark
            ? "linear-gradient(105deg, rgba(10,6,8,0.97) 0%, rgba(10,6,8,0.85) 50%, rgba(10,6,8,0.4) 100%)"
            : "linear-gradient(105deg, rgba(253,245,246,0.97) 0%, rgba(253,245,246,0.88) 50%, rgba(253,245,246,0.5) 100%)",
        }}
      />
      {/* Crimson radial glow */}
      <Box
        sx={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse at 70% 60%, rgba(196,30,58,0.14) 0%, transparent 55%)",
        }}
      />
      <ParticleCanvas />

      {/* Content */}
      <Box
        sx={{
          position: "relative", zIndex: 2,
          px: { xs: 3, sm: 5, md: 10, lg: 14 },
          display: "flex", flexDirection: { xs: "column", lg: "row" },
          alignItems: "center", gap: { xs: 5, lg: 10 },
          width: "100%", maxWidth: 1300, mx: "auto",
        }}
      >
        {/* Text block */}
        <Box sx={{ flex: 1, maxWidth: 620 }}>
          <Chip
            label="✦  Dark Romance Author"
            size="small"
            sx={{
              mb: 3, fontFamily: "'Cinzel', serif", fontSize: "0.62rem",
              letterSpacing: "0.15em", color: "primary.main",
              background: alpha(theme.palette.primary.main, 0.1),
              border: `1px solid ${alpha(theme.palette.primary.main, 0.28)}`,
            }}
          />

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "3rem", sm: "4.5rem", md: "5.5rem", lg: "6.2rem" },
              lineHeight: 0.95, fontWeight: 900, color: "text.primary",
              mb: 0.5,
            }}
          >
            Aisha
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "3rem", sm: "4.5rem", md: "5.5rem", lg: "6.2rem" },
              lineHeight: 0.95, fontWeight: 900,
              fontStyle: "italic", color: "primary.main",
              mb: 3,
            }}
          >
            AandMore.
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: { xs: "1.25rem", md: "1.55rem" },
              fontStyle: "italic", fontWeight: 300,
              color: "text.secondary", mb: 1.5, lineHeight: 1.4,
            }}
          >
            "{author.tagline}"
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              color: "text.secondary", lineHeight: 1.8, fontWeight: 300,
              mb: 4, maxWidth: 500,
            }}
          >
            Bestselling dark romance author of 14 novels. 2.4 million readers worldwide.
            Writing the morally grey, dangerously obsessive love stories you can't put down.
          </Typography>

          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              variant="contained" color="primary" size="large"
              startIcon={<AutoStoriesIcon />}
              onClick={() => document.getElementById("books")?.scrollIntoView({ behavior: "smooth" })}
              sx={{ px: 3.5, py: 1.4, fontSize: "0.78rem" }}
            >
              Explore Books
            </Button>
            <Button
              variant="outlined" size="large"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              sx={{
                px: 3.5, py: 1.4, fontSize: "0.78rem",
                borderColor: alpha(theme.palette.text.primary, 0.22),
                color: "text.primary",
                "&:hover": { borderColor: "primary.main", color: "primary.main", background: "transparent" },
              }}
            >
              Meet the Author
            </Button>
          </Box>

          {/* Stats row */}
          <Box sx={{ display: "flex", gap: { xs: 3, md: 4 }, mt: 5, flexWrap: "wrap" }}>
            {author.stats.map((s) => (
              <Box key={s.label}>
                <Typography sx={{
                  fontFamily: "'Playfair Display', serif", fontWeight: 700,
                  fontSize: { xs: "1.5rem", md: "1.8rem" }, color: "primary.main", lineHeight: 1,
                }}>
                  {s.value}
                </Typography>
                <Typography sx={{
                  fontSize: "0.65rem", fontFamily: "'Cinzel', serif",
                  letterSpacing: "0.1em", color: "text.secondary", mt: 0.3,
                }}>
                  {s.label.toUpperCase()}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Profile picture */}
        <Box
          sx={{
            flexShrink: 0,
            width: { xs: 220, sm: 270, md: 310, lg: 350 },
            height: { xs: 280, sm: 340, md: 390, lg: 440 },
            position: "relative",
          }}
        >
          {/* Decorative border frame */}
          <Box
            sx={{
              position: "absolute",
              top: -12, left: -12, right: 12, bottom: 12,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.35)}`,
              borderRadius: 3,
            }}
          />
          <Box
            component="img"
            src={author.profileImg}
            alt={author.name}
            sx={{
              width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "center top",
              borderRadius: 3,
              position: "relative", zIndex: 1,
              boxShadow: isDark
                ? "0 25px 60px rgba(0,0,0,0.7), 0 0 30px rgba(196,30,58,0.15)"
                : "0 25px 60px rgba(26,8,16,0.25)",
            }}
          />
          {/* Name label on photo */}
          <Box
            sx={{
              position: "absolute", bottom: 20, left: -16, zIndex: 2,
              background: isDark ? "rgba(10,6,8,0.92)" : "rgba(253,245,246,0.95)",
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 2, px: 2, py: 1,
              backdropFilter: "blur(8px)",
            }}
          >
            <Typography sx={{ fontFamily: "'Cinzel', serif", fontSize: "0.62rem", letterSpacing: "0.12em", color: "primary.main" }}>
              AUTHOR
            </Typography>
            <Typography sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1rem", color: "text.primary", fontStyle: "italic" }}>
              Aisha
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Scroll hint */}
      <Box
        sx={{
          position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 0.5,
          animation: "bounce 2s infinite",
          "@keyframes bounce": {
            "0%,100%": { transform: "translateX(-50%) translateY(0)" },
            "50%": { transform: "translateX(-50%) translateY(6px)" },
          },
        }}
      >
        <Typography sx={{ fontFamily: "'Cinzel', serif", fontSize: "0.58rem", letterSpacing: "0.2em", color: "text.secondary" }}>
          SCROLL
        </Typography>
        <KeyboardArrowDownIcon sx={{ color: "primary.main", fontSize: 18 }} />
      </Box>
    </Box>
  );
}
