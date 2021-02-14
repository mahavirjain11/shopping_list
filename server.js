const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// bodyparser middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to mongoDB
mongoose
        .connect(db, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
        .then(() => console.log('Connected to  the Database...'))
        .catch((err) => console.log(err));

// Use routes
const products = require('./routes/products');
app.use('/products' , products);


const port =  process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on ${port}`));
