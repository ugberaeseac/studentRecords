const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()
const urlDB = process.env.urlDB

const dbConnect = async () => {
    await mongoose.connect(urlDB)
    .then(() => {
        console.log('Database Connected')
    })
    .catch((error) => {
        console.log('Error connecting to Database', error)
        process.exit(1)
    })};


module.exports = dbConnect;