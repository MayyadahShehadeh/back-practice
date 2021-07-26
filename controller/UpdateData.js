'use strict';

const drinksModel = require("../models/Fav");

function updateData(req,res){
    
  
        const { name,img } = req.body
        const id = req.params.id
        console.log('in update 1')
        drinksModel.find({ _id: id }, (err, data) => {
            console.log('in update 2')
            if (err) {
                console.log('in update 3')
                res.send(err)
            } else {
                console.log('in update 4')
                console.log(data)
                data[0].name = name;
                data[0].img = img;
                data[0].save();
                drinksModel.find({}, (err, data) => {
                    res.send(data)
                })
            }
        })



}
module.exports=updateData;