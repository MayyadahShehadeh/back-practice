// 'use strict';

// const drinksModel = require("../models/Fav");

// function AddToFav(req,res){
// const {name,img}=req.body;
// const newDrink=new drinksModel({
//   name:name,
//   img:img
// })

// newDrink.save();
// res.send('item added');
// }





//   const { name, img } = req.body;

//     drinksModel.find({ name }, (err, data) => {
//       if (err) {
//         res.status(500).send("there is an error");
//       } else {
//         if (data.length == 0) {
//           let newfav = new drinksModel({
//             name: name,
//             img: img,
//           });
  
//           newfav.save();
//           res.send("fav added");
//         }
//       }
//     });
    // --------------------------------------

   

// module.exports=AddToFav;