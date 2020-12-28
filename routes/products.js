const router = require('express').Router();
const Product = require('../models/Product');

//read school classes
router.get('/', (req, res) => {
  Product.find()
  .then(items => res.json(items));
})

router.post('/addWatch', async (req,res) => {

  //Check if user already exists
  const watchExist = await Product.findOne({name: req.body.name});
  if(watchExist) return res.send("Watch already exists");

  const newWatch = new Product({
    name: req.body.name,
    details: req.body.details,
    price: req.body.price,
    category: req.body.category
  });
  try{
      const savedWatch = await newWatch.save();
      res.send(newWatch._id);
  }catch(err){
      res.status(400).send(err);
  }

})




  module.exports = router;