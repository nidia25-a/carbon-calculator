const express = require('express');
const router = express.Router();
const { Pool } = require("pg");

// Initialize PostgreSQL connection
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "carbon",
  password: "password",
  port: 5432,
});

router.post("/calculate", async (req, res) => {
    try {
        // Extract values from request body & validate
        const { electricity = 0, gas = 0, biogas = 0, fuel = 0, solar = 0, wind = 0, biogasOffset = 0 } = req.body;

        // Ensure all values are numbers
        if ([electricity, gas, biogas, fuel, solar, wind, biogasOffset].some(isNaN)) {
            return res.status(400).json({ error: "Invalid input. All values must be numbers." });
        }

        // Emission factors
        const factors = {
            electricity: 0.5,
            gas: 2.2,
            biogas: 0.1,
            fuel: 2.3,
            solar: 0.4,
            wind: 0.5,
            biogasOffset: 0.8,
        };

        // Calculations
        const homeEmissions = electricity * factors.electricity + gas * factors.gas + biogas * factors.biogas;
        const carEmissions = fuel * factors.fuel;
        const totalEmissions = homeEmissions + carEmissions;
        const offsets = solar * factors.solar + wind * factors.wind + biogasOffset * factors.biogasOffset;
        const netEmissions = totalEmissions - offsets;

        const result = {
            totalEmissions: totalEmissions.toFixed(2),
            offsets: offsets.toFixed(2),
            netEmissions: netEmissions.toFixed(2),
        };

        // Store the data in PostgreSQL
        await pool.query(
            "INSERT INTO emissions (electricity, gas, biogas, fuel, solar, wind, biogasOffset, total_emissions, offsets, net_emissions) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)",
            [electricity, gas, biogas, fuel, solar, wind, biogasOffset, totalEmissions, offsets, netEmissions]
        );

        res.json(result);
    } catch (error) {
        console.error("Error processing request:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;  // ✅ Export after defining routes so that it can be used in other files
