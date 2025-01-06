const dotenv = require('dotenv');
dotenv.config();
const express = require ('express');
const cors =require('cors');
const app = express();
const connectToDB = require('./db/db');
connectToDB();
const userRoutes = require('./Routes/user.Routes')
app.use(cors());




app.get('/' , (req , res) =>{
    res.send('hello-world');
});
app.use('/users', userRoutes)
app.use(express.json());
app.use(express.urlencoded({extended: true}))
module.exports = app ;