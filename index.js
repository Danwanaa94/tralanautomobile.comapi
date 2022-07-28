const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const connectDB = require("./config/connectDB");
const userRoute = require("./routes/userRoute");
const TransactionRoute = require("./routes/transactionRoute")

connectDB();
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/users", userRoute);
app.use("/api/transactions", TransactionRoute)


//home route
app.get("/", (req, res) => {
  res.send("WELCOME TO TRALAN TRANSACTIONS DASHBOARD");
});




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is running!!");
});
