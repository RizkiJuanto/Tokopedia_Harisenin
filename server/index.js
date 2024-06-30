const express = require("express");
const cors = require('cors');
const app = express();

app.listen(3002, () => console.log("Server start WOI"));
app.get("/api/hi", (req, res) => res.send("Hi"));
