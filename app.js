// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);
const { isAuthenticated } = require("./middleware/jwt.middleware");

// 👇 Start handling routes here
// Contrary to the views version, all routes are controlled from the routes/index.js
const allRoutes = require("./routes/index.routes");
app.use("/api", allRoutes);

const petRoutes = require("./routes/pet.routes");
app.use("/api/pet", isAuthenticated, petRoutes);

const userRoutes = require("./routes/user.routes");
app.use("/api/user", isAuthenticated, userRoutes);

const commentRoutes = require("./routes/comment.routes");
app.use("/api/comment", isAuthenticated, commentRoutes);

const availRoutes = require("./routes/avail.routes");
app.use("/api/avail", isAuthenticated, availRoutes);

const appointRoutes = require("./routes/appointment.routes");
app.use("/api/appointment", isAuthenticated, appointRoutes);

const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
