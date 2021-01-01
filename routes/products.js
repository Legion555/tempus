const router = require('express').Router();
const Product = require('../models/Product');

//read all items
router.get('/', (req, res) => {
  Product.find()
  .then(items => res.json(items));
})
router.get('/:id', (req, res) => {
  const id = req.params.id;
  User.find({_id: id}).then(items => res.json(items));
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

//Delete item
router.delete('/deleteWatch/:id', (req, res) => {
  const id = req.params.id;
  Product.deleteOne({ _id: id },
  function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
})



module.exports = router;