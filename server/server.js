const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const db = require("./db");
const addressRoutes = require("./routes/addressRoutes");
const productRoutes = require("./routes/productRoutes");
const bankAccountRoutes = require("./routes/bankAccountRoutes");
const customerRoutes = require("./routes/customerRoutes");
const cartRoutes = require("./routes/cartRoutes");
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/public", express.static("public"));

//test db
db.authenticate()
  .then(() => console.log("databse connected"))
  .catch((err) => console.log("error connecting" + err));

app.get("/", (req, res) => res.send("welcome to api localhost :D:D:D:D:D"));

// Alamat routes
app.use("/api/addresses", addressRoutes);
app.use("/api/accounts", bankAccountRoutes);
app.use("/api/products", productRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/cart", cartRoutes);


db.sync()
  .then(() => console.log("Database synced"))
  .catch((err) => console.log("Error syncing database: " + err));

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));



