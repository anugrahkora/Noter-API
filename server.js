const express = require('express');
const cors = require('cors');
const User = require('./models/userModel');
require('dotenv').config();
require('./database/connectDB');

const app = express();
app.use(express.json());

// routes
const authRoute = require('./routes/authRoute');

const addToDBRoute = require('./routes/addToDBRoute');

app.use('/addToDB',
    addToDBRoute)



app.get('/', (req, res) => {
    res.send('Welcome Noter API');


});
const PORT = process.env.PORT;
app.listen(PORT, () => console.log('Server running on ' + PORT));