const Product = require("../models/product.model");

function getAllProducts(req, res) {
  Product.find({})
    .then((allProducts) => res.json( allProducts ))
    .catch((err) => res.json({ message: "something went wrong", error: err }));
  //   res.send("I'm going to send all users in database later");
}

function createNewProduct(req, res) {
  Product.create({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
  })
    .then(() =>
      res.json({ message: "Your product has been created successfully" })
    )
    .catch((err) =>
      res.json({ error: true, message: "Failed to create product" })
    );
}

function deleteById(req, res) {
  Product.deleteOne({ _id: req.params._id })
    .then((result) => res.json(result))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
}

function find(req, res) {
  Product.findOne({ _id: req.params._id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
}

function update(req, res) {
  Product.updateOne({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
  })
    .then(() =>
      res.json({ message: "Your product has been updated successfully" })
    )
    .catch((err) => res.json(err));
}

module.exports = {
  getAllProducts,
  createNewProduct,
  deleteById,
  find,
  update,
};

// function deleteUserByName(req, res) {
//   const { userName } = req.params;
//   User.deleteOne({ name: userName })
//     .then((result) => res.json(result))
//     .catch((err) =>
//       res.json({ error: true, message: "Failed to delete user" })
//     );
// }
