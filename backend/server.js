const express = require("express");
const app = express();

const dbConfig = require("../backend/config/dbconfig");
const dotenv = require("dotenv");
const adminRoutes = require("../backend/Routes/AdminRoutes");
const usersRoutes=require('../backend/Routes/UserRoutes')

const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/admin",adminRoutes);
app.use("/api/users",usersRoutes)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
