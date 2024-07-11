const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const db = require("./db");
const addressRoutes = require("./routes/addressRoutes");
const productRoute = require("./routes/productRoute");
const bankAccountRoutes = require("./routes/bankAccountRoutes");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//test db
db.authenticate()
  .then(() => console.log("databse connected"))
  .catch((err) => console.log("error connecting" + err));

app.get("/", (req, res) => res.send("welcome to api"));

// Alamat routes
app.use("/api/addresses", addressRoutes);
app.use("/api/accounts", bankAccountRoutes);
app.use("/api/products", productRoute);

db.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.log('Error syncing database: ' + err));

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));


