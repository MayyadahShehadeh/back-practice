// 'use strict';

// const drinksModel = require("../models/Fav");

// function deleteData(req,res){
// const drinkid=req.params
// drinksModel.findOneAndDelete({id:drinkid}, (err,data)=>{
// if (err){
// res.status(500).send('there is error',err);

// }else{
// drinksModel.find({},(err,data)=>{
// res.send(data);

// })
// }
// })
// }

// module.exports=deleteData;



// ------------------------------------------------------------------------------





// 'use strict';
// const drinksModel = require('../models/Fav');


// function deleteData (req, res) {
//     const drinkid = req.params
   
//     drinksModel.findOneAndDelete({ id: drinkid }, (err, data) => {
//         if (err) {
//             res.send(err)
//         } else {
//             // console.log('delete 2')

//             drinksModel.find({}, (err, data) => {
//                 res.send(data)
//             })
//         }
//     })
// }
// module.exports=deleteData;