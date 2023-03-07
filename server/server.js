const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())



app.listen(4000, () => {
    console.log("app listening on 4000")
})