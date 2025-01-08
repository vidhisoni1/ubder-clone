const dotenv = require('dotenv');
dotenv.config();
const express = require ('express');
const cors =require('cors');
const app = express();
const connectToDB = require('./db/db');
connectToDB();
const userRoutes = require('./routes/user.Routes')
app.use(cors());




app.get('/' , (req , res) =>{
    res.send('hello-world');
});
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use('/users', userRoutes)
module.exports = app ;