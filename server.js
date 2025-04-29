const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const fs = require('fs');
const { Pool } = require("pg");

// Load environment variables early
dotenv.config();

const app = express();

// Configure PostgreSQL connection
const pool = new Pool({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "carbon",
  password: process.env.DB_PASSWORD || "password",
  port: process.env.DB_PORT || 5432,
});

// CORS Configuration
const corsOptions = {
  origin: "*", // Allow all origins (for development)
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve files directly from project root
app.use(express.static(__dirname));

// Explicit route for your HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'carbon_calculator.html'));
});

// Routes
/*const loginRouter = require('./routes/login');
app.use('/authenticate', loginRouter); */

const carbonRouter = require('./routes/carbon_calc');
console.log("✔ Loaded carbon_calc route.");
app.use('/emission', carbonRouter);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

// Graceful Shutdown
process.on('SIGINT', () => {
    console.log("\nShutting down server...");
    pool.end(() => {
        console.log("PostgreSQL pool has ended");
        process.exit(0);
    });
});
