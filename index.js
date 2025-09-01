const express = require("express");
const os = require("os");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware: log requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Root route
app.get("/", (req, res) => {
  res.send("🚀 Welcome to the Node.js Love Story App!");
});

// Love story route
app.get("/love", (req, res) => {
  const digu = "Digu";
  const diya = "Diya";
  const story = `${digu} is a boy. ${diya} is a girl. ❤️ They love each other and dream about a beautiful future together.`;

  res.json({
    couple: `${digu} + ${diya}`,
    message: story,
    status: "💞 True Love Forever"
  });
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

// About
app.get("/about", (req, res) => {
  res.json({
    app: "LoveStoryApp",
    version: "1.0.0",
    description: "A fun Node.js app inside Docker showing routes and a love story 💖"
  });
});

// System info
app.get("/system", (req, res) => {
  res.json({
    hostname: os.hostname(),
    platform: os.platform(),
    cpus: os.cpus().length,
    memory: `${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
