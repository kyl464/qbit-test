const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    name: "Kue Lapis Tradisional",
    description: "Kue lapis spesial dari resep warisan keluarga",
    price: 50000,
    category: "Kue Tradisional",
    image: "/images/kue-lapis.jpg",
  },
  {
    id: 2,
    name: "Dodol Nusantara",
    description: "Dodol berkualitas premium dari berbagai daerah",
    price: 75000,
    category: "Oleh-oleh",
    image: "/images/dodol.jpg",
  },
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));

  if (!product) {
    return res.status(404).json({ message: "Produk tidak ditemukan" });
  }

  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});

module.exports = app;
