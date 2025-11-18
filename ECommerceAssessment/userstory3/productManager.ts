// productManager.ts - Product Management Module (final stable version)

// Interface for product information
interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
}

// Product class implementing IProduct
class ProductItem implements IProduct {
  constructor(
    public id: number,
    public name: string,
    public category: string,
    public price: number,
    public stock: number
  ) {}

  // Logs whenever price changes
  updatePrice(newPrice: number) {
    console.log("Change detected in: updatePrice");
    this.price = newPrice;
    console.log(`${this.name} new price: $${this.price}`);
  }

  // Logs whenever stock changes
  updateStock(newStock: number) {
    console.log("Change detected in: updateStock");
    this.stock = newStock;
    console.log(`${this.name} new stock: ${this.stock}`);
  }
}

// Create product list using Map
const productInventory: Map<number, ProductItem> = new Map();
productInventory.set(1, new ProductItem(1, "Laptop", "Electronics", 800, 10));
productInventory.set(2, new ProductItem(2, "T-Shirt", "Fashion", 25, 50));
productInventory.set(3, new ProductItem(3, "Blender", "Home", 60, 20));

// Display product details
for (const [id, product] of productInventory) {
  console.log(`${id} → ${product.name} | ${product.category} | $${product.price} | Stock: ${product.stock}`);
}

// Update one product to test change logging
const first = productInventory.get(1);
if (first) {
  first.updatePrice(850);
  first.updateStock(12);
}
