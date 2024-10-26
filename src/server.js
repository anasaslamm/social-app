const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger"); // Import Swagger config

const app = express();
const PORT = 5000;

app.use(express.json());

// Sample route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express API!" });
});

// Swagger setup
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`API Server running at http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});

// index.js

/**
 * @swagger
 * /api/hello:
 *   get:
 *     summary: Returns a greeting message
 *     responses:
 *       200:
 *         description: Successful response
 */
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express API!" });
});
