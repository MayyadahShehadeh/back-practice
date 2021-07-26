// 'use strict';

// const superagent = require('superagent');

// const getApiData =async(req,res)=>{
// let url=`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`;
// superagent.get(url).then((response)=>{
//     // res.send(response.body.drinks)

// // --- looping through api data to get spicific data that i specify down in class and get only it 
// const resData= response.body.drinks.map(values=>{
// return new Drinkmodel(values);
// });
// res.send(resData);
// })
// // ---------------------------
// .catch((error)=>{
// console.log('there is error',error);

// })
// }

// //  -------- if we have long array and we want specific data from it we can specify what we want here : -------
// class Drinkmodel{
// constructor(data) {
// this.name=data.strDrink;
// this.idDrink= data.idDrink;
// this.drinkImg=data.strDrinkThumb;  
//     }
// }
// module.exports=getApiData;
