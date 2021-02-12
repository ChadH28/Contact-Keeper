// bringing in express server
const express = require("express");
const connectDB = require("./Config/db");

// initialzing express into a variable
const app = express();

// Connect database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// adding endpoint /route
app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the contact keeper api" })
);

// Defining Routes
app.use("/api/users", require("./Routes/users"));
app.use("/api/auth", require("./Routes/auth"));
app.use("/api/contacts", require("./Routes/contacts"));

// Always put below the routes
// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

// made a enviromental variable
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
