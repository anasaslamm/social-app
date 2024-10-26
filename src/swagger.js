const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Express API Documentation",
    version: "1.0.0",
    description: "API documentation for a simple Express server",
  },
  servers: [
    {
      url: "http://localhost:5000",
      description: "Development server",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./index.js"], // Path to your API files
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
