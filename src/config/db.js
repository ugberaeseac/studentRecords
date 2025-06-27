const mongoose = require('mongoose');


const dbConnect = () => {
    mongoose.connect('mongodb://localhost:27017/studentDB')
    .then(() => {
        console.log('Database Connected')
    })
    .catch((error) => {
        console.log('Error connecting to Database', error)
    })};


mondules.export(
    dbConnect,
);