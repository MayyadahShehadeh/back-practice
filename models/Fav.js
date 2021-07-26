'use strict';

const mongoose = require('mongoose');


const drinkSchema = mongoose.Schema({
  name:String,
  img:String,
 
  });
  //   ------------- model -------------------------------------
  const drinksModel = mongoose.model('drink', drinkSchema);

  module.exports=drinksModel;
