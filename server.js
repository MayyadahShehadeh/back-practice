const express = require('express')
const app = express() 
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');


const mongoose = require('mongoose');
const Port = 8000
// const { response } = require('express');

mongoose.connect('mongodb://localhost:27017/practice',
{ useNewUrlParser: true, useUnifiedTopology: true, });
// ----------------------------------------------------------------------- 
//  middleware
app.use(cors());
app.use(express.json());

// proof of life endpint
app.get('/', function (req, res) { 
  res.send('Hello World')
});

// const gatapiData = require('./getApi');
// app.get('/getApiData',gatapiData);

// ----------------------------------------------------------
const getAllDrinksHandler = require('./controller/GetAllTheData');

const CRUD = require('./controller/CRUD');
const updateData = require('./controller/UpdateData');
app.get("/getAllDrinks", getAllDrinksHandler);

app.post("/AddToFav",CRUD.AddToFav);
app.get("/getFavData", CRUD.getFavData);
app.delete("/deleteData/:id",CRUD.deleteData);
app.put("/updateData/:id",updateData);
// ------------------------------------------------------------------------


app.listen(Port, () => {
  console.log(`listining on port ${Port}`);
});