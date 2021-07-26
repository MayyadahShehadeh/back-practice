"use strict";

const superagent = require("superagent");


// -------------------------------------- to get all data in main page ---------------------- 
function getAllDrinksHandler(req,res){
let url =`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`;
superagent.get(url).then((response)=>{
res.send(response.body.drinks);
})
.catch((err)=>{
res.status(500).send('there is error',err
)})

}

// --------------------------------------------------------------------------------


// function getAllDrinksHandler(req, res) {

  //   const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink';
  
  //   axios.get(url).then(i => {
  //       const artData = i.body.data.map(y => new ArtData(y))
  //       res.send(artData)
  //   }).catch(error => {
  //       console.log('==================')
  //       console.log(error)
  //       console.log('==================')
  //   })
  // }
  // class ArtData {
  //   constructor(data) {
  //       this.name = data.drinks.strDrink;
  //       this.img = data.drinks.strDrinkThumb;
      
  //   }
  // }

module.exports=getAllDrinksHandler