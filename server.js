require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const items = require('./routes/api/items')

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());


// Connect to mongoDB

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(error => console.error(error));

const port = process.env.PORT || 5000;


// Use Routes

app.use('/api/items', items)

app.listen(port, () => console.log(`Server started on Port ${port}`))
