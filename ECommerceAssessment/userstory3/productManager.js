// productManager.ts - Product Management Module (final stable version)
// Product class implementing IProduct
var Product = /** @class */ (function () {
    function Product(id, name, category, price, stock) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.stock = stock;
    }
    // Logs whenever price changes
    Product.prototype.updatePrice = function (newPrice) {
        console.log("Change detected in: updatePrice");
        this.price = newPrice;
        console.log("".concat(this.name, " new price: $").concat(this.price));
    };
    // Logs whenever stock changes
    Product.prototype.updateStock = function (newStock) {
        console.log("Change detected in: updateStock");
        this.stock = newStock;
        console.log("".concat(this.name, " new stock: ").concat(this.stock));
    };
    return Product;
}());
// Create product list using Map
var productInventory = new Map();
productInventory.set(1, new Product(1, "Laptop", "Electronics", 800, 10));
productInventory.set(2, new Product(2, "T-Shirt", "Fashion", 25, 50));
productInventory.set(3, new Product(3, "Blender", "Home", 60, 20));
// Display product details
for (var _i = 0, productInventory_1 = productInventory; _i < productInventory_1.length; _i++) {
    var _a = productInventory_1[_i], id = _a[0], product = _a[1];
    console.log("".concat(id, " \u2192 ").concat(product.name, " | ").concat(product.category, " | $").concat(product.price, " | Stock: ").concat(product.stock));
}
// Update one product to test change logging
var first = productInventory.get(1);
if (first) {
    first.updatePrice(850);
    first.updateStock(12);
}
