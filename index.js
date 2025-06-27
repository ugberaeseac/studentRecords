const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const dbConnect = require('./src/config/db');

dotenv.config();
const app = express();

app.use(express.json());
app.use(morgan('dev'));

const PORT = process.env.PORT


app.get('/', (req, res) => {
    res.send('This is the Homepage')
});

//app.use(')


app.listen(PORT, () => {
    dbConnect()
    console.log(`The Server is up and running on http://localhost:${PORT}`)

})