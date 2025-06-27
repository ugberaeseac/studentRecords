const express = require('express')

app = express.json()

PORT = process.env.PORT


app.listen((PORT) => {
    console.log(`The Server is up and running on port ${PORT}`)

})