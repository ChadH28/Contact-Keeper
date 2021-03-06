// bringing in express server
const express = require("express");
const connectDB = require("./config/db");
const path = require('path');

// initialzing express into a variable
const app = express();

// Connect database
connectDB();
// made a enviromental variable
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));

// Init Middleware
app.use(express.json({ extended: false }));

// Defining Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));


// Always put below the routes
// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}