const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(express.json());
// Home Page
app.get("/", (req, res) => {
res.send("?? Welcome to My Node.js Project (Running on Azure)!");
});
// Sample API
app.get("/api/info", (req, res) => {
res.json({
app: "My Node Project",
status: "Running",
time: new Date()
});
});
// Health Check
app.get("/health", (req, res) => {
res.json({ status: "UP" });
});
// Start Server
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});