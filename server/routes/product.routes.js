const ProductController = require("../controllers/product.controller")
function registerProductRoutes(app)
{
    
    app.get("/api/products", ProductController.getAllProducts);
    app.get("/api/products/:_id", ProductController.find);
    app.post("/api/products/new", ProductController.createNewProduct);
    app.delete("/api/products/deletebyId/:_id", ProductController.deleteById);
    app.put("/api/product/:_id", ProductController.update);
}

module.exports = registerProductRoutes