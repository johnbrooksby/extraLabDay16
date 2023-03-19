require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {PORT} = process.env

app.use(express.json());
app.use(cors());

const {getOrders, deleteOrder, addOrder} = require("./controller/ctrl");

// app.post("/orders", () => console.log("We're here now"));
app.post("/orders", addOrder);

app.get("/orders", getOrders);

app.delete("/orders:id", deleteOrder);

// let PORT = 4321
app.listen(PORT, () => {
    console.log(`app listening on ${PORT}`)
});