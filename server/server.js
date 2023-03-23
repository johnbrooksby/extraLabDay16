require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
const {PORT} = process.env

app.use(express.json());
app.use(cors());

const {getOrders, deleteOrder, addOrder} = require("./controller/ctrl");

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/../client/foodOrder.html'))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '/../client/style.css'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '/../client/foodOrder.js'))
})

app.get('/ico', (req, res) => {
    res.sendFile(path.join(__dirname, '/../client/favicon.icon'))
})

app.post("/orders", addOrder);

app.get("/orders", getOrders);

app.delete("/orders/:id", deleteOrder);

app.listen(PORT, () => {
    console.log(`app listening on ${PORT}`)
});