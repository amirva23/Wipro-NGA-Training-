const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory product data (mock database)
let products = [
 {
    id: 1,
    name: "Laptop Pro 15",
    price: 85000,
    category: "Electronics",
    description: "High performance laptop for professionals.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&w=800"
  },
  {
    id: 2,
    name: "Smartphone X",
    price: 55000,
    category: "Mobiles",
    description: "Flagship smartphone with AMOLED display.",
    image: "https://m.media-amazon.com/images/I/71d7rfSl0wL._SL1500_.jpg"
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: 6000,
    category: "Accessories",
    description: "Noise cancelling over-ear headphones.",
    image: "https://m.media-amazon.com/images/I/61kFL7ywsZS._SL1500_.jpg"
  }
];



// GET /products -> list all products
app.get("/products", (req, res) => {
  try {
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// GET /products/:id -> product details
app.get("/products/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const product = products.find((p) => p.id === id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

// POST /products -> add new product
app.post("/products", (req, res) => {
  try {
    const { name, price, category, description } = req.body;

    if (!name || !price || !category || !description) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    const newProduct = {
      id: products.length ? products[products.length - 1].id + 1 : 1,
      name,
      price: Number(price),
      category,
      description
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Failed to add product!" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`My Backend server running on http://localhost:${PORT}`);
});
