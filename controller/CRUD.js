'use strict';
const drinksModel = require("../models/Fav");

//---------------------------------------- post ----------------------------- 

const AddToFav= async (req,res)=>{
  const {name,img}=req.body;

  const newDrink=new drinksModel({
    name:name,
    img:img,
   
  })
  newDrink.save();
console.log(newDrink);
res.send('item added');

}


// ----------------------------------  get fav data --------------------------------------

const getFavData = async (req,res) => {
drinksModel.find({},(err,data)=>{
if (err){
  res.status(500).send('error');
}else{
  res.send(data);
}
});
}

// ---------------------------- delete fav data -----------------------------------------------------------
const deleteData = async (req,res)=>{

const drinkid=req.params._id
drinksModel.findOneAndDelete({id:drinkid}, (err,data)=>{
if (err){
res.status(500).send('there is error',err);
}else{
drinksModel.find({},(err,data)=>{
res.send(data);

});
}
});
}

// ------------------------------------------------------ update data ----------------
const updateData = async (req,res)=>{

const {name,img}=req.body;
const id = req.params._id
drinksModel.find({id:id},(err,data)=>{

if (err){
  res.send(err)
}else{

  data[0].name=name;
  data[0].img=img;
  data[0].save();
  res.send(data);
  res.sen('data updated');
  console.log(data[0]);


}
})
}

 
//  ----------------- export -------------------
module.exports={
  AddToFav,
  getFavData,
  deleteData,
  updateData,
}